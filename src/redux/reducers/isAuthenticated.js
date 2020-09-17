import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initAuth = {
  isAuthenticated: false,
  userData: null,
  tokenId: null,
  userId: null
};

const setIsAuthenticated = (state, action) => {
  return updateObject(state, {isAuthenticated: action.toggle});
};

const setUserId = (state, action) => {
  return updateObject(state, {userId: action.id});
};

const setTokenId = (state, action) => {
  return updateObject(state, {tokenId: action.token});
};

const setUserData = (state, action) => {
  return updateObject(state, {userData: action.data});
};

const fiveDayForecast = (state = initAuth, action) => {
  switch (action.type) {
    case actionTypes.IS_AUTHENTICATED: return setIsAuthenticated(state, action)
    case actionTypes.SET_USER_DATA: return setUserData(state, action)
    case actionTypes.SET_TOKEN_ID: return setTokenId(state, action)
    case actionTypes.SET_USER_ID: return setUserId(state, action)
    default: return state
  }
};

export default fiveDayForecast;