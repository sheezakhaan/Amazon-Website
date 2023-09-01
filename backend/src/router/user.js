const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/models");
require("../database/db");

//signnup
router.post("/signup", async (req, res) => {

  const { firstName, lastName, email, password, cpassword } = req.body;

  if (!firstName || !lastName || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Fill the required fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const user = new User({
        firstName,
        email,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    res.json({ error: "error" });
  }
});

//Signin
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "fill the required data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();

      res.cookie("jwtcookie", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "User Signedin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials 2" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
