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
        recentCities: [
          ...state.recentCities, 
          {
            id: action.id,
            recentCity: action.recent_city
          }
        ]
      }
    case 'FETCH_RECENTCITIES_PENDING':
      return {
        ...state,
        fetchPending: true
      }
    case 'FETCH_RECENTCITIES_SUCCESS':
      return {
        ...state,
        fetchPending: false,
        fetchRecentCities: action.products
      }
    case 'FETCH_RECENTCITIES_ERROR':
      return {
        ...state,
        fetchPending: false,
        fetchPrror: action.error
      }
    default:
      return state
  }
};

export default currentWeather;