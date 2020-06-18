import WeatherIcons from '../weather/WeatherIcons';
import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthWrap = () => {
  return (
    <section className="container auth-wrapper">
      <h1 className="pageHeader">Welcome to tinyWeather. A tiny weather app.</h1>
      <p className="tagline">tinyWeather is built with reactJS, styled with SASS, is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      <WeatherIcons animate={true} />
      <Login />
      <SignUp />
    </section>
  );
};

export default AuthWrap;