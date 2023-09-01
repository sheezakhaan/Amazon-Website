import React, {useState} from "react";
import logotwo from "../Images/logo-two.png";
import { NavLink, useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    fullName: "", email:"", password:"", cpassword:""
  })

  let name, value;

  const handleInputs = (e) => {
   console.log(e);
   name = e.target.name;
   value = e.target.value;

   setUser({...user, [name]:value});
  }

const SendData = async (e) => {
   e.preventDefault();

   const { fullName, email, password, cpassword } = user;

   const res = await fetch("/signup", {
     Method: "POST",
     headers: {
       "Content-Type": "application/json",
       'Accept': 'application/json'
   },
   Body: JSON.stringify({
     fullName, email, password, cpassword
   })
});
  const data = await res.json();

  if(data.status === 400 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration")
  }else{
    window.alert("Registration Successful");
    console.log("Registration Successful");

    history.push("/signin");
  }
}

  
  return (
    <>
      <NavLink to='/'>   
        <img src={logotwo} alt='logotwo' srcset='' className='image' />
      </NavLink>
      <br />
      <br />
      <form method="POST">
        <h3 style={{ marginLeft: "500px", fontWeight: "500" }}>
          Create account
        </h3>

        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
            style={{ width: "300px", marginLeft: "500px" }}
          >
            Full name:
          </label>
          <input
            type='name'
            className='form-control'
            id='exampleInputEmail1'
            name="fullName"
            value={user.fullName}
            onChange={handleInputs}
            aria-describedby='emailHelp'
            style={{ width: "300px", marginLeft: "500px" }}
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputPassword1'
            className='form-label'
            style={{ width: "300px", marginLeft: "500px" }}
          >
            Email:
          </label>
          <input
            style={{ width: "300px", marginLeft: "500px" }}
            type='email'
            className='form-control'
            id='exampleInputPassword1'
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
            style={{ width: "300px", marginLeft: "500px" }}
          >
            Password:
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputEmail1'
            name="password"
            value={user.password}
            onChange={handleInputs}
            aria-describedby='emailHelp'
            style={{ width: "300px", marginLeft: "500px" }}
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
            style={{ width: "300px", marginLeft: "500px" }}
          >
            Confirm Password:
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputEmail1'
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            aria-describedby='emailHelp'
            style={{ width: "300px", marginLeft: "500px" }}
          />
        </div>
        <NavLink
          type='submit'
          to='/'
          className='btn btn-warning'
          onClick={SendData}
          style={{ width: "300px", marginLeft: "500px" }}
        >
          Create your Amazon account
        </NavLink>
      </form>

      <hr />

      <h6 style={{marginLeft: "520px" }}>Already have an account? <span><NavLink to="/Signin">Sign in</NavLink></span></h6>
    </>
  );
}

export default Signup;
