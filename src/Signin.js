import React, { Component } from 'react';
import { authenticate, useConnect } from '@blockstack/connect';

export const Signin = () => {
  const { doOpenAuth, doAuth } = useConnect();
  const signInAuthOptions = {
    sendToSignIn: true,
    redirectTo: "/"
  };

  return (
    <div className="panel-landing" id="section-1">
      <h1 className="landing-heading">Thank you for choosing D-Vault!</h1>
      <p className="lead">
        <button
          className="btn btn-primary btn-lg"
          id="signin-button"
          onClick={() => doOpenAuth()}
        >
          Sign In
        </button>
        <br/>
        <a
          onClick={() => doAuth()} type="button"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Signin;
