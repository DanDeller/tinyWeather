/* 
 * MAIN ACTIONS INDEX FILE
 * - WeatherMain.js
 *    setCity, 
 *    setDetails, 
 *    recentCity, 
 *    isOpen, 
 *    visible, 
 *    setVideo
 * 
 * - Async calls
 *    getWeather,
 *    fetchRecentCities, 
 *    postRecentCities,
 *    deleteRecentCities
 */

import { Rain, Clear, Clouds, ThunderLightning, Haze, Snow } from '../../assets/videos/vid-exports';
import uuid from 'react-uuid';
import axios from 'axios';

export const setCity = city => ({
  type: 'SET_CITY',
  city
});

export const setDetails = cityDetails => ({
  type: 'SET_DETAILS',
  cityDetails
});

export const recentCity = (recent_city, id) => ({
  type: 'RECENT_CITY',
  id,
  recent_city
});

export const isOpen = isOpen => ({
  type: 'IS_OPEN',
  isOpen
});

export const visible = visible => ({
  type: 'VISIBLE',
  visible
});

export const setVideo = video => ({
  type: 'SET_VIDEO',
  video
});

export const getWeather = (city) => {
  return dispatch => {
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
      
      dispatch(postRecentCities(city, uuid()));
      dispatch(setDetails(details));
      dispatch(isOpen(false));
      dispatch(setVideo(Object.values(video)[0]));
    })
    .catch(() => dispatch(visible(true)));
  }
}

export const fetchRecentCities = () => {
  return dispatch => {
    axios.get('/currentWeather')
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(recentCity(res.data));
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

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
    .catch((error) => {
      console.log(error);
    })
  }
}

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
      dispatch(fetchRecentCities());
    })
    .catch((error) => {
      console.log(error);
    });
  }
}