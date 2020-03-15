const initCity = {
  setCity: '',
  cityDetails: [],
  recentCities: []
}

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        setCity: action.city
      }
    case 'SET_DETAILS':
      return {
        ...state,
        cityDetails: [action.cityDetails]
      }
    case 'RECENT_CITY':
      return {
        ...state,
        recentCities: [...state.recentCities, action.recent_city]
      }
    default:
      return state
  }
};

export default currentWeather;