import { combineReducers } from 'redux';
import currentWeather from './CurrentWeather';
import fiveDayForecast from './FiveDayForecast';

export default combineReducers({
  currentWeather,
  fiveDayForecast
});