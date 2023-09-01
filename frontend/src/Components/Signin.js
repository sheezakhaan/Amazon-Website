import React,  { useState} from "react";
import logotwo from "../Images/logo-two.png";
import { NavLink, useHistory } from "react-router-dom";

function Signin() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async(e) => {
    e.preventDefault()

    const res = await fetch('/Signin', {
    Method:"POST",
    Headers:{
      "Content-Type": "application/json",  
      'Accept': 'application/json'
    },
    Body: JSON.stringify({
      email,
      password
    })
  });
  const data = await res.json();

  if(data.status === 400 || !data){
    window.alert("Invalid Credentials")
  }else{
    window.alert("Sign in Successful")
    history.push("/")
  }
}
  
  return (
    <>
      <NavLink to='/'>
        <img src={logotwo} alt='logotwo' srcset='' className='image' />
      </NavLink>

      <form method="POST">
        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
            style={{ width: "300px", marginLeft: "500px" }}
          >
            Email address:
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px", marginLeft: "500px" }}
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='exampleInputPassword1'
            className='form-label'
            style={{ width: "300px", marginLeft: "500px" }}
          >
            Password:
          </label>
          <input
            style={{ width: "300px", marginLeft: "500px" }}
            name='password'
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <NavLink
          type='submit'
          to='/'
          className='btn btn-warning'
          style={{ width: "300px", marginLeft: "500px" }}
          onClick={loginUser}
        >
          Submit
        </NavLink>
      </form>

      <hr />

      <h6 style={{ width: "300px", marginLeft: "590px" }}>New to Amazon? </h6>
      <NavLink to="/Signup"><button
        type='submit'
        className='btn btn-light'
        style={{ width: "300px", marginLeft: "500px" }}
      >
        Create your Amazon account
      </button>
      </NavLink>
    </>
  );
}

export default Signin;
