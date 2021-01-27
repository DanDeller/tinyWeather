import * as fetchFlagAction from '../../redux/actions/fiveDayForecast';
import * as actions from '../../redux/actions/currentWeather';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WeatherForm.css';

const WeatherForm = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const fiveDayForecast = useSelector(state => state.fiveDayForecast);
  const currentWeather = useSelector(state => state.currentWeather);
  const [city, setCity] = useState({city: ''});
  const userId = isAuthenticated.userId;
  const weatherInput = React.useRef();
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.setCity(e.target.value));
    setCity(e.target.value);
  };

  const getWeather = (e) => {
    e.preventDefault();
    dispatch(actions.getWeather(city, userId));
  };

  const resetSearch = () => {
    dispatch(actions.resetSearch());
    dispatch(fetchFlagAction.setFetchFlag(!!fiveDayForecast.fetchFlag));
    clearInput();
  };

  const clearInput = () => weatherInput.current.value = '';

  return (
    <div className="weatherForm"> 
      <div className={`${(currentWeather.isOpen ? 'show' : 'hide')}`}>
        <form action='/' method='GET'>
          <input
            ref={weatherInput}
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