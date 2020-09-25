import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initCity = {
  weatherLoading: false,
  sidebarLoading: false,
  recentCities: [],
  cityDetails: [],
  visible: false,
  isOpen: true,
  setVideo: '',
  setCity: '',
};

const setCity = (state, action) => {
  return updateObject(state, {setCity: action.city});
};

const setVideo = (state, action) => {
  return updateObject(state, {setVideo: action.video});
};

const setIsOpen = (state, action) => {
  return updateObject(state, {isOpen: action.isOpen});
};

const setVisible = (state, action) => {
  return updateObject(state, {visible: action.visible});
};

const setDetails = (state, action) => {
  return updateObject(state, {cityDetails: [action.cityDetails]});
};

const setRecentCity = (state, action) => {
  return updateObject(state, {recentCities: [...state.recentCities, ...action.recent_city]});
};

const removeRecentCity = (state, action) => {
  return updateObject(state, {recentCities: state.recentCities.filter((city) => city.id !== action.id)});
};

const fetchWeatherStart = (state) => {
  return updateObject(state, {weatherLoading: true});
};

const fetchWeatherSuccess = (state) => {
  return updateObject(state, {weatherLoading: false});
};

const fetchRecentCitiesStart = (state) => {
  return updateObject(state, {sidebarLoading: true});
};

const fetchRecentCitiesSuccess = (state) => {
  return updateObject(state, {sidebarLoading: false})
};

const resetAction = (state) => {
  return updateObject(state, {recentCities: []})
};

const currentWeather = (state = initCity, action) => {
  switch (action.type) {
    case actionTypes.SET_CITY: return setCity(state, action)
    case actionTypes.IS_OPEN: return setIsOpen(state, action)
    case actionTypes.VISIBLE: return setVisible(state, action)
    case actionTypes.SET_VIDEO: return setVideo(state, action)
    case actionTypes.SET_DETAILS: return setDetails(state, action)
    case actionTypes.RESET_ACTION: return resetAction(state, action)
    case actionTypes.RECENT_CITY: return setRecentCity(state, action)
    case actionTypes.REMOVE_RECENT_CITY: return removeRecentCity(state, action)
    case actionTypes.FETCH_WEATHER_START: return fetchWeatherStart(state, action)
    case actionTypes.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action)
    case actionTypes.FETCH_RECENT_CITIES_START: return fetchRecentCitiesStart(state, action)
    case actionTypes.FETCH_RECENT_CITIES_SUCCESS: return fetchRecentCitiesSuccess(state, action)
    default: return state
  }
};

export default currentWeather;