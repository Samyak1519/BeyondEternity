// New Login Page !Not Ready

import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";

function Login() {
  return (
    <>
      <div className="container">
        <div>{/* LoginImage or Information*/}</div>
        <div className="container">
          {/* Actual logIN Form */}
          <h3>LogIn</h3>
          <Input type="text">Email or UserName</Input>
          <Input type="text">Password</Input>
          <Button color="success">LogIn</Button>
          <p>
            New User? Click here to
            <Link>SignUp</Link>
            <Link>Forgot Password?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
