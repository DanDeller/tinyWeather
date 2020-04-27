import React from 'react';
import style from '../assets/styles/style.less';

const Home = () => {
  return (
    <section className={style.container + ' ' + style.bodyText + ' ' + style.home}>
      <h1 className={style.pageHeader}>Welcome to tinyWeather. A tiny weather app.</h1>
      <p className={style.tagline}>tinyWeather is built with reactJS, styled with LESS (or SASS), is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      <img className={style.weatherIcon + ' ' + style.animateRain} src={require('../assets/img/rainy.png')} />
      <img className={style.weatherIcon + ' ' + style.animateSun} src={require('../assets/img/sunny.png')} />
      <img className={style.weatherIcon + ' ' + style.animateSnow} src={require('../assets/img/snow.png')} />
      <img className={style.weatherIcon + ' ' + style.animateThunder} src={require('../assets/img/thunder.png')} />
    </section>
  );
}

export default Home;