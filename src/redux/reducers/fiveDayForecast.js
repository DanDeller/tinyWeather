const prevCity = {
  prevCity: false
}

const fiveDayForecast = (state = prevCity, action) => {
  switch (action.type) {
    case 'PREV_CITY':
      return {
        ...state,
        prevCity: action.prevCity
      }
    default:
      return state
  }
};

export default fiveDayForecast;