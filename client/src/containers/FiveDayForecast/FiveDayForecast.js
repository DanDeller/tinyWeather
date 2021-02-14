import * as actions from '../../redux/actions/fiveDayForecast';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './FiveDayForecast.css';
import 'moment-timezone';

const FiveDayForecast = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector(state => state.currentWeather);
  const fiveDayForecast = useSelector(state => state.fiveDayForecast);
  const forgotCityInline = !currentWeather.setCity.length ? 'show' : 'hide';

  useEffect(() => {
    const fetchFlag = fiveDayForecast.fetchFlag;
    const city = currentWeather.setCity;

    if (currentWeather.setCity.length && !fetchFlag) {
      dispatch(actions.fetchDays(city));
      dispatch(actions.setFetchFlag(!!fiveDayForecast.fetchFlag));
    };
    // eslint-disable-next-line
  }, []);

  const days = fiveDayForecast.days.map((day, i) => (
    <div className={`day ${currentWeather.setCity.length === 0 ? 'hide' : 'show'}`} key={i}>
      <p>
        <Moment format="dddd">
          {day.dt_txt.split(' ')[0]}
        </Moment>
        <span>{day.dt_txt.split(' ')[0]}</span>  
      </p>
      <p>{day.main.temp.toFixed(0)}</p>
      <p>{`${day.weather[0].description[0].toUpperCase()}${day.weather[0].description.slice(1)}`}</p>
    </div>
  ));

  return (
    <section className="container">
      <div className="weather-main body-text">
        <h1 className="page-header">Forecast for the next five days</h1>
        <div className="day-hold">
          <h3 className={`hide forgot-city ${forgotCityInline}`}>Go lookup a city first!</h3>
          {days}
        </div>
      </div>
    </section>
  );
};

FiveDayForecast.propTypes = {
  fetchFlag: PropTypes.bool,
  dispatch: PropTypes.func,
  city: PropTypes.string,
  days: PropTypes.array
};

export default FiveDayForecast;