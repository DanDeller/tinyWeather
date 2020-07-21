import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import './Auth.scss';

const AuthWrap = () => {
  const [isLogin, toggleLogin] = useState(false);
  const handleFormChange = () => {
    toggleLogin(!isLogin);
  };

  return (
    <section className="container auth-wrapper">
      <h1 className="pageHeader">Welcome to tinyWeather. <span>A tiny weather app.</span></h1>
      <p className="tagline">tinyWeather is built with reactJS, styled with SASS, is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>
      {isLogin ? <Login /> : <SignUp />}
      <button className="btn-main" onClick={handleFormChange}>Switch to {isLogin ? 'Signup' : 'Login'}</button>
    </section>
  );
};

export default AuthWrap;