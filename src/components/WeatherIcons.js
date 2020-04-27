import React from 'react';
import style from '../assets/styles/style.less';

const WeatherIcons = (props) => {
  const animate = props;
  console.log(animate);
  return (
    <div>
      <img className={style.weatherIcon + ' ' + style.animateRain} src={require('../assets/img/rainy.png')} />
      <img className={style.weatherIcon + ' ' + style.animateSun} src={require('../assets/img/sunny.png')} />
      <img className={style.weatherIcon + ' ' + style.animateSnow} src={require('../assets/img/snow.png')} />
      <img className={style.weatherIcon + ' ' + style.animateThunder} src={require('../assets/img/thunder.png')} />
    </div> 
  )
}

export default WeatherIcons;