import * as actionTypes from '../actions/actionTypes';

const initCity = {
  setCity: '',
  setVideo: '',
  isOpen: true,
  visible: false,
  loading: false,
  cityDetails: [],
  recentCities: []
}

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case actionTypes.SET_VIDEO:
      return {
        ...state,
        setVideo: action.video
      }
    case actionTypes.SET_CITY:
      return {
        ...state,
        setCity: action.city
      }
    case actionTypes.IS_OPEN:
      return {
        ...state,
        isOpen: action.isOpen
      }
    case actionTypes.VISIBLE:
      return {
        ...state,
        visible: action.visible
      }
    case actionTypes.SET_DETAILS:
      return {
        ...state,
        cityDetails: [action.cityDetails]
      }
    case actionTypes.RECENT_CITY:
      return {
        ...state,
        recentCities: action.recent_city
      }
    case actionTypes.REMOVE_RECENT_CITY:
      return {
        ...state,
        recentCities: state.recentCities.filter((city) => city.id !== action.id)
      }
    case actionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
};

export default currentWeather;