import * as actionTypes from '../actions/actionTypes';

export const setAuth = (payload) => {
  return dispatch => {
    dispatch(setTokenId(payload.token));
    dispatch(setIsAuthenticated(payload.isAuthenticated));
    dispatch(setUserId(payload.id));
  };
};

export const resetAuth = () => {
  return dispatch => {
    dispatch(setIsAuthenticated(false));
    dispatch(setTokenId(null));
    dispatch(setUserId(null));
  };
};

export const setIsAuthenticated = toggle => ({
  type: actionTypes.IS_AUTHENTICATED,
  toggle
});

export const setUserId = id => ({
  type: actionTypes.SET_USER_ID,
  id
});

export const setTokenId = token => ({
  type: actionTypes.SET_TOKEN_ID,
  token
});

export const setUserData = data => ({
  type: actionTypes.SET_USER_DATA,
  data
});