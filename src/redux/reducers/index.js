import fiveDayForecast from './fiveDayForecast';
import currentWeather from './currentWeather';
import { combineReducers } from 'redux';

export default combineReducers({
  currentWeather,
  fiveDayForecast
});