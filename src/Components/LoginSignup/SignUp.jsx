//  New Sign Up Page !Not Ready

import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";

function SignUp() {
  return (
    <>
      <div className="conatiner">
        <div className="conatiner">
          {/* SignUp Form */}
          <h3>Create Account</h3>
          <Input>Name</Input>
          <Input>Username</Input>
          <Input>Email</Input>
          <Input>Password</Input>
          <Button color="success">Sign Up</Button>
          <p>
            Already registered? <Link>LogIn.</Link>
          </p>
        </div>
        <div>{/* Image or Imfromation of SignUp */}</div>
      </div>
    </>
  );
}

export default SignUp;
