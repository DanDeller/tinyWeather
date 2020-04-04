import { combineReducers } from 'redux';
import currentWeather from './currentWeather';
import fiveDayForecast from './fiveDayForecast';

export default combineReducers({
  currentWeather,
  fiveDayForecast
});