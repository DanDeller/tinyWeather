import fiveDayForecast from './fiveDayForecast';
import isAuthenticated from './isAuthenticated';
import currentWeather from './currentWeather';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  fiveDayForecast,
  isAuthenticated,
  currentWeather
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_ACTION') {
    state = undefined;
  };

  return appReducer(state, action);
};

export default rootReducer;