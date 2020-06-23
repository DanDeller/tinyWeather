import * as actionTypes from '../actions/actionTypes';

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