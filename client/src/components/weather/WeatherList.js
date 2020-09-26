import PropTypes from 'prop-types';
import './WeatherList.scss';
import React from 'react';

const WeatherList = ({isOpen, cityDetails}) => {
  const city = cityDetails.map((item, i) => (
    <div className="weatherItem" key={i}>
      <h3>City: {item.name}</h3>
      <p>Current weather: {item.weather}</p>
      <p>Current temperature: {item.temp}</p>
    </div>
  ));

  return (
    <div className={`weatherItems ${!isOpen ? 'showItems' : 'hideItems'}`}>
      {city}
    </div>
  );
};

WeatherList.propTypes = {
  cityDetails: PropTypes.array,
  isOpen: PropTypes.bool 
};

export default WeatherList;