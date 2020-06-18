import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initAuth = {
  isAuthenticated: false
};

const setIsAuthenticated = (state, action) => {
  return updateObject(state, {isAuthenticated: action.toggle});
};

const fiveDayForecast = (state = initAuth, action) => {
  switch (action.type) {
    case actionTypes.IS_AUTHENTICATED: return setIsAuthenticated(state, action)
    default: return state
  }
};

export default fiveDayForecast;