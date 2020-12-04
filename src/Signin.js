import React, { Component } from 'react';
import { authenticate, useConnect } from '@blockstack/connect';

export const Signin = () => {
  const { doOpenAuth } = useConnect();
  const signInAuthOptions = {
    sendToSignIn: true,
    // your other AuthOptions
  };

  const signUpAuthOptions = {
    sendToSignIn: false,
    // your other AuthOptions
  };

  return (
    <div className="panel-landing" id="section-1">
      <h1 className="landing-heading">Thank you for choosing D-Vault!</h1>
      <p className="lead">
        <button
          className="btn btn-primary btn-lg"
          id="signin-button"
          onClick={() => authenticate(signUpAuthOptions)}
        >
          Sign In
        </button>
        <br/>
        <a
          onClick={() => doOpenAuth()} type="button"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Signin;
