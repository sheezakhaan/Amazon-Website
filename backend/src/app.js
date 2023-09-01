const express = require("express");
const env = require('dotenv').config();
const app = express();
const mongoose = require("mongoose");

require("./database/db")
app.use(express.json())
// const User = require("./model/model")
app.use(require("./router/user"))


//Routes
app.get("/", (req, res) => {
    // res.send("hey")
    res.json({message: "hey"})
})

app.get("/user", (req, res) => {
    // res.send("hey")
    res.json({message: "hey"})
})

app.get("/signup", (req, res) => {
    // res.send("hey")
    res.json({message: "hey"})

})

app.get("/signin", (req, res) => {
    // res.send("hey")
    res.json({message: "hey"})
})


//server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});