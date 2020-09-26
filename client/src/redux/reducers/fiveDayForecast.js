import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initDays = {
  fetchFlag: false,
  loading: false,
  days: []
};

const fetchDaysStart = (state) => {
  return updateObject(state, {loading: true});
};

const fetchDaysSuccess = (state, action) => {
  return updateObject(state, {days: action.days, loading: false});
};

const setFetchFlag = (state, action) => {
  return updateObject(state, {fetchFlag: !action.fetchFlag});
};

const fiveDayForecast = (state = initDays, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DAYS_START: return fetchDaysStart(state, action)
    case actionTypes.FETCH_DAYS_SUCCESS: return fetchDaysSuccess(state, action)
    case actionTypes.FETCH_FLAG: return setFetchFlag(state, action)
    default: return state
  }
};

export default fiveDayForecast;