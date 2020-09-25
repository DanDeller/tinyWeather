import * as fetchFlagAction from '../../redux/actions/fiveDayForecast';
import * as actions from '../../redux/actions/currentWeather';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './WeatherForm.scss';

import { AuthContext } from '../../Context/AuthContext';

const WeatherForm = () => {
  const currentWeather = useSelector(state => state.currentWeather);
  const fiveDayForecast = useSelector(state => state.fiveDayForecast);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const [city, setCity] = useState({city: ''});
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();

  // grab user info and token 
  // console.log(authContext);
  // console.log(localStorage.getItem('tinyWeatherToken'));

  const onChange = (e) => {
    dispatch(actions.setCity(e.target.value));
    setCity(e.target.value);
  };

  const getWeather = (e) => {
    e.preventDefault();
    dispatch(actions.getWeather(city, isAuthenticated.userId));
  };

  const resetSearch = () => {
    dispatch(actions.isOpen(true));
    dispatch(actions.setVideo(''));
    dispatch(actions.setCity(''));
    dispatch(fetchFlagAction.setFetchFlag(!!fiveDayForecast.fetchFlag));
  };

  return (
    <div className="weatherForm"> 
      <div className={`${(currentWeather.isOpen ? 'show' : 'hide')}`}>
        <form action='/' method='GET'>
          <input
            onChange={onChange}
            type='text'
            name='test'
            placeholder='Search city'
            className="searchMain"
          />
          <input
            onClick={e => getWeather(e)}
            type='submit'
            value='Search'
            className='search-city'
          />
        </form>
      </div>
      <div className={`resetButton ${(currentWeather.isOpen ? 'hide' : 'show')}`}>
        <p>Seach another city?</p>
        <button
          onClick={resetSearch}>Search
        </button>
      </div>
    </div>
  );
};

WeatherForm.propTypes = {
  resetSearch: PropTypes.func,
  getWeather: PropTypes.func,
  onChange: PropTypes.func,
  isOpen: PropTypes.bool
};

export default WeatherForm;