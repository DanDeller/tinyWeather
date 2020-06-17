import WeatherIcons from '../weather/WeatherIcons';
import React from 'react';

const Home = () => {
  return (
    <section className="container bodyText home">
      <h1 className="pageHeader">Welcome to tinyWeather. A tiny weather app.</h1>
      <p className="tagline">tinyWeather is built with reactJS, styled with SASS, is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      <WeatherIcons animate={true} />
    </section>
  );
}

export default Home;