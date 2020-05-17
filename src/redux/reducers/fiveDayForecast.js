const initDays = {
  days: []
}

const fiveDayForecast = (state = initDays, action) => {
  switch (action.type) {
    case 'FETCH_DAYS_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_DAYS_SUCCESS':
      return {
        ...state,
        days: action.days
      }
    default:
      return state
  }
};

export default fiveDayForecast;