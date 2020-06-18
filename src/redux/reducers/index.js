import fiveDayForecast from './fiveDayForecast';
import currentWeather from './currentWeather';
import isAuthenticated from './isAuthenticated';
import { combineReducers } from 'redux';

export default combineReducers({
  currentWeather,
  fiveDayForecast,
  isAuthenticated
});