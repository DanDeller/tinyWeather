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
 *    fetchRecentCities, 
 *    postRecentCities,
 *    deleteRecentCities
 */

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

export const fetchRecentCities = () => {
  return dispatch => {
    axios.get('/currentWeather')
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(recentCity(res.data));
    })
    .catch(error => {
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