import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
      <CSSTransitionGroup
        transitionName="list-item"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={true}
        transitionEnterTimeout={500}
        transitionLeave={true}
        transitionLeaveTimeout={300}>
        {city}
      </CSSTransitionGroup>
    </div>
  );
}

WeatherList.propTypes = {
  cityDetails: PropTypes.array,
  isOpen: PropTypes.bool 
};

export default WeatherList;