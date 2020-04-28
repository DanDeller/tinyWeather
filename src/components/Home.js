import React from 'react';
import style from '../assets/styles/style.less';
import WeatherIcons from './WeatherIcons';

const Home = () => {
  return (
    <section className={`${style.container} ${style.bodyText} ${style.home}`}>
      <h1 className={style.pageHeader}>Welcome to tinyWeather. A tiny weather app.</h1>
      <p className={style.tagline}>tinyWeather is built with reactJS, styled with LESS (or SASS), is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      <WeatherIcons animate={true} />
    </section>
  );
}

export default Home;