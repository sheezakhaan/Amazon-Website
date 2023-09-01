import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Headers";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";


const App = () => {
  return (
    <>
     <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path='/Signin' component={Signin} />
        <Route exact path='/Signup' component={Signup} />
        <Redirect to='/' />
      </Switch>
    </>
  );
};

export default App;
