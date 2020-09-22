import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="container auth-wrapper">
      <h1 className="pageHeader">Welcome to tinyWeather. <span>A tiny weather app.</span></h1>
      <p className="tagline">tinyWeather is built with reactJS, styled with SASS, is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>
    </section>
  );
};

export default About;