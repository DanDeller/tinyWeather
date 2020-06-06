import * as actionTypes from '../actions/actionTypes';

const initDays = {
  days: [],
  loading: false
}

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const fetchDaysSuccess = (state, action) => {
  return updateObject(state, {
    days: action.days,
    loading: false  
  })
};

const fiveDayForecast = (state = initDays, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DAYS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_DAYS_SUCCESS:
      return fetchDaysSuccess(state, action)
    default:
      return state
  }
};

export default fiveDayForecast;