import PropTypes from 'prop-types';
import React from 'react';
import './WeatherList.css';

const WeatherIcons = ({animate}) => {
  return (
    <div className="weatherIcons">
      <img className={`weatherIcon ${(animate ? 'animateRain' : 'rain')}`} src={require('../../assets/img/rainy.png')} alt='rain' />
      <img className={`weatherIcon ${(animate ? 'animateSun' : 'sun')}`} src={require('../../assets/img/sunny.png')} alt='sun' />
      <img className={`weatherIcon ${(animate ? 'animateSnow' : 'snow')}`} src={require('../../assets/img/snow.png')} alt='snow' />
      <img className={`weatherIcon ${(animate ? 'animateThunder' : 'thunder')}`} src={require('../../assets/img/thunder.png')} alt='thunder' />
    </div> 
  )
};

WeatherIcons.propTypes = {
  animate: PropTypes.bool
};

export default WeatherIcons;