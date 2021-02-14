import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import './Auth.css';

const AuthWrap = () => {
  const [isLogin, toggleLogin] = useState(false);
  const handleFormChange = () => {
    toggleLogin(!isLogin);
  };

  return (
    <section className="container auth-wrapper">
      <h1 className="page-header">Welcome to tinyWeather. <span>A tiny weather app.</span></h1>
      <p className="tagline">tinyWeather is built with reactJS, <span className="tech-removed">styled with SASS</span>, is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>
      {isLogin ? <Login /> : <SignUp />}
      <button className="btn-main switch-auth" onClick={handleFormChange}>Switch to {isLogin ? 'Signup' : 'Login'}</button>
    </section>
  );
};

export default AuthWrap;