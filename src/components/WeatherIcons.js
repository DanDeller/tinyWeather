import React from 'react';
import style from '../assets/styles/style.less';

const WeatherIcons = (props) => {
  const prop = props.animate;
  return (
    <div>
      <img className={style.weatherIcon + ' ' + (prop ? style.animateRain : style.rain)} src={require('../assets/img/rainy.png')} />
      <img className={style.weatherIcon + ' ' + (prop ? style.animateSun : style.sun)} src={require('../assets/img/sunny.png')} />
      <img className={style.weatherIcon + ' ' + (prop ? style.animateSnow : style.snow)} src={require('../assets/img/snow.png')} />
      <img className={style.weatherIcon + ' ' + (prop ? style.animateThunder : style.thunder)} src={require('../assets/img/thunder.png')} />
    </div> 
  )
}

export default WeatherIcons;