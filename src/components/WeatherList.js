import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const WeatherList = (newCity) => {
  const classes = !newCity.isOpen ? style.active : '';
  const city = newCity.details.map((item, i) => (
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

export default WeatherList;