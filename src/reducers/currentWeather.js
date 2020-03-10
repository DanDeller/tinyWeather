const initCity = {
  setCity: '',
  searchCity: '',
  recentCities: []
}

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        setCity: action.city
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