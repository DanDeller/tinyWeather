const initCity = {
  setCity: '',
  setVideo: '',
  isOpen: true,
  visible: false,
  cityDetails: [],
  recentCities: [],
  fetchPending: false,
  fetchRecentCities: [],
  fetchError: null
}

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case 'SET_VIDEO':
      return {
        ...state,
        setVideo: action.video
      }
    case 'SET_CITY':
      return {
        ...state,
        setCity: action.city
      }
    case 'IS_OPEN':
      return {
        ...state,
        isOpen: action.isOpen
      }
    case 'VISIBLE':
      return {
        ...state,
        visible: action.visible
      }
    case 'SET_DETAILS':
      return {
        ...state,
        cityDetails: [action.cityDetails]
      }
    case 'RECENT_CITY':
      return {
        ...state,
        recentCities: action.recent_city
      }
    case 'FETCH_RECENTCITIES':
      return {
        ...state,
        fetchPending: false,
        fetchRecentCities: action.city
      }
    default:
      return state
  }
};

export default currentWeather;