import * as actionTypes from '../actions/actionTypes';

const initDays = {
  days: []
}

const fiveDayForecast = (state = initDays, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DAYS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_DAYS_SUCCESS:
      return {
        ...state,
        days: action.days
      }
    default:
      return state
  }
};

export default fiveDayForecast;