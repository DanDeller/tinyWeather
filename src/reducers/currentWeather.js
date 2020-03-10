const initCity = {
  setCity: '',
  searchCity: ''
}

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        setCity: action.city
      }
    default:
      return state
  }
};

export default currentWeather;