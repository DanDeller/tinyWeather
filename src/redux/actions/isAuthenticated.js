import * as actionTypes from '../actions/actionTypes';

export const setIsAuthenticated = (toggle) => ({
  type: actionTypes.IS_AUTHENTICATED,
  toggle
});