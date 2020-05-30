import { Rain, Clear, Clouds, ThunderLightning, Haze, Snow } from '../../assets/videos/vid-exports';
import * as actionTypes from '../actions/actionTypes';
import uuid from 'react-uuid';
import axios from 'axios';

export const setCity = city => ({
  type: actionTypes.SET_CITY,
  city
});

export const setDetails = cityDetails => ({
  type: actionTypes.SET_DETAILS,
  cityDetails
});

export const recentCity = (recent_city, id) => ({
  type: actionTypes.RECENT_CITY,
  id,
  recent_city
});

export const isOpen = isOpen => ({
  type: actionTypes.IS_OPEN,
  isOpen
});

export const visible = visible => ({
  type: actionTypes.VISIBLE,
  visible
});

export const setVideo = video => ({
  type: actionTypes.SET_VIDEO,
  video
});

export const fetchWeatherSuccess = () => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
});

export const fetchWeatherStart = () => ({
  type: actionTypes.FETCH_WEATHER_START
});

export const removeRecentCity = id => ({
  type: actionTypes.REMOVE_RECENT_CITY,
  id
});

export const getWeather = (city) => {
  return dispatch => {
    dispatch(fetchWeatherStart());
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`)
    .then(res => {
      let video = '';
      const details = {
        name: res.data.name,
        weather: res.data.weather[0].main.toLowerCase(),
        temp: parseInt(res.data.main.temp)
      };

      switch(details.weather) {
        case 'clouds':
          video = {Clouds};
          break;
        case 'clear':
          video = {Clear};
          break;
        case 'drizzle':
        case 'rain':
          video = {Rain};
          break;
        case 'haze': 
        case 'mist':
          video = {Haze};
          break;
        case 'thunderstorm':
          video = {ThunderLightning};
          break;
        case 'snow':
          video = {Snow};
      }
      
      // Use a timeout to simulate a slightly longer loading time
      // to help demo the loader and display it, at minimum, for 500ms
      // NOTE: this is for demo purposes only. Don't use in realtime
      setTimeout(() => {
        dispatch(fetchWeatherSuccess());
        dispatch(postRecentCities(city, uuid()));
        dispatch(setDetails(details));
        dispatch(isOpen(false));
        dispatch(setVideo(Object.values(video)[0]));
      }, 500);
    })
    .catch((err) => {
      console.log(err);
      dispatch(visible(true))
    });
  }
};

export const fetchRecentCities = () => {
  return dispatch => {
    axios.get('/currentWeather')
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(recentCity(res.data));
    })
    .catch((err) => console.log(err));
  }
};

export const postRecentCities = (city, id) => {
  return dispatch => {
    const data = {
      id: id,
      city: city
    };
    axios.post('/currentWeather', data)
    .then(() => {
      dispatch(fetchRecentCities());
    })
    .catch((err) => console.log(err));
  }
};

export const deleteRecentCities = (id) => {
  return dispatch => {
    const data = {
      id: id
    };
    axios.delete('/currentWeather', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        source: data
      }
    })
    .then(() => {
      dispatch(removeRecentCity(data.id));
    })
    .catch((err) => console.log(err));
  }
};