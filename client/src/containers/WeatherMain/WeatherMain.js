import * as actions from '../../redux/actions/currentWeather';
import Sidebar from '../../components/sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './WeatherMain.scss';

const WeatherVideo = React.lazy(() => import('../../components/weather-video/WeatherVideo'));
const WeatherForm = React.lazy(() => import('../../components/weather-form/WeatherForm'));
const WeatherList = React.lazy(() => import('../../components/weather/WeatherList'));

const WeatherMain = () => {
  const currentWeather = useSelector(state => state.currentWeather);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentWeather.recentCities.length) {
      dispatch(actions.fetchRecentCities(isAuthenticated.userId));
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section className="container">
      <div className="weatherMain bodyText">
        <h1 className="pageHeader">Search a city to check the weather</h1>
        <div className="hold">
          <div className="weatherLeft">
            <WeatherVideo 
              setVideo={currentWeather.setVideo}  
            />
            <WeatherForm
              isOpen={currentWeather.isOpen}
              city={currentWeather.city}
            />
            <WeatherList
              cityDetails={currentWeather.cityDetails}
              isOpen={currentWeather.isOpen}
            />
          </div>
          <div className="weatherRight">
            <Sidebar
              recentCities={currentWeather.recentCities}
              visible={currentWeather.visible}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WeatherMain.propTypes = {
  recentCities: PropTypes.array,
  cityDetails: PropTypes.array,
  setVideo: PropTypes.string,
  dispatch: PropTypes.func,
  visible: PropTypes.bool,
  isOpen: PropTypes.bool,
  city: PropTypes.string
};

export default WeatherMain;