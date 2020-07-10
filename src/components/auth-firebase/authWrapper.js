import WeatherIcons from '../weather/WeatherIcons';
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
      <h1 className="pageHeader">Welcome to tinyWeather. A tiny weather app.</h1>
      <p className="tagline">tinyWeather is built with reactJS, styled with SASS, is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      <WeatherIcons animate={true} />
      {isLogin ? <Login /> : <SignUp />}
      <button className="btn-main" onClick={handleFormChange}>Switch to {isLogin ? 'Signup' : 'Login'}</button>
    </section>
  );
};

export default AuthWrap;