const initCity = {
  setCity: '',
  setVideo: '',
  isOpen: true,
  visible: false,
  cityDetails: [],
  recentCities: [],
  //-------------------
  pending: false,
  products: [],
  error: null
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
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        pending: false,
        products: action.products
      }
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
};

export default currentWeather;