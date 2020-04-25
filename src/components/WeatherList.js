import React from 'react';
import style from '../assets/styles/style.less';
import PropTypes from 'prop-types';

const WeatherList = (props) => {
  const classes = !props.isOpen ? style.active : '';
  const city = props.cityDetails.map((item, i) => (
    <div className={style.weatherItem} key={i}>
      <h3>City: {item.name}</h3>
      <p>Current weather: {item.weather}</p>
      <p>Current temperature: {item.temp}</p>
    </div>
  ));

  return (
    <div className={style.weatherItems + ' ' + classes}>
      {city}
    </div>
  );
}

WeatherList.propTypes = {
  'cityDetails': PropTypes.array,
  'isOpen': PropTypes.bool 
};

export default WeatherList;