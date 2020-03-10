const initCity = {
  city: []
}

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        city: action.city
      }
    default:
      return state
  }
};

export default currentWeather;