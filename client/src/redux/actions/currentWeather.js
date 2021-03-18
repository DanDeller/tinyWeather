import { Rain, Clear, Clouds, ThunderLightning, Haze, Snow } from '../../assets/videos/vid-exports';
import * as actionTypes from '../actions/actionTypes';
import uuid from 'react-uuid';
import axios from 'axios';

export const resetWeather = () => {
  return dispatch => {
    dispatch(reset_action());
    dispatch(isOpen(true));
    dispatch(setVideo(''));
    dispatch(setCity(''));
  };
};

export const resetSearch = () => {
  return dispatch => {
    dispatch(isOpen(true));
    dispatch(setVideo(''));
    dispatch(setCity(''));
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch(fetchWeatherSuccess());
    dispatch(visible(false));
    dispatch(setCity(''));
  };
};

export const setCity = city => ({
  type: actionTypes.SET_CITY,
  city
});

export const setDetails = cityDetails => ({
  type: actionTypes.SET_DETAILS,
  cityDetails
});

export const recentCity = recent_city => ({
  type: actionTypes.RECENT_CITY,
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

export const removeRecentCity = id => ({
  type: actionTypes.REMOVE_RECENT_CITY,
  id
});

export const reset_action = () => ({
  type: actionTypes.RESET_ACTION
});

export const runEasterEgg = (bool) => ({
  type: actionTypes.RUN_EASTER_EGG,
  bool
});

/*
 *  FETCH WEATHER
 */
export const fetchWeatherStart = () => ({
  type: actionTypes.FETCH_WEATHER_START
});

export const fetchWeatherSuccess = () => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
});

/*
 *  FETCH RECENT CITES
 */
export const fetchRecentCitiesStart = () => ({
  type: actionTypes.FETCH_RECENT_CITIES_START,
});

export const fetchRecentCitiesSuccess = () => ({
  type: actionTypes.FETCH_RECENT_CITIES_SUCCESS,
});

/*
 *  GET WEATHER
 */
export const getWeather = (city, userId) => {
  return dispatch => {
    dispatch(fetchWeatherStart());
    const cityState = city.split(',');
    
    // Use the below comment to avoid eslint warnings. Reason: an extra space being added when using a comma after a template literal.
    // eslint-disable-next-line
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityState[0]}\,,${cityState[1]}&APPID=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`)
    .then(res => {
      let video = '';
      const details = {
        name: res.data.name,
        weather: res.data.weather[0].main.toLowerCase(),
        temp: parseInt(res.data.main.temp)
      };

      if (cityState[0] === 'jackson') {
        const audio = document.querySelector(`audio[data-id="egg"]`)
        audio.play();
        dispatch(runEasterEgg(true));
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
          break;
        default: return
      };

      // Use a timeout to simulate a slightly longer loading time
      // to help demo the loader and display it, at minimum, for 500ms
      // NOTE: This is for demo purposes only. Don't use in realtime
      setTimeout(() => {
        dispatch(fetchWeatherSuccess());
        dispatch(postRecentCities(city, uuid(), userId));
        dispatch(setDetails(details));
        dispatch(isOpen(false));
        dispatch(setVideo(Object.values(video)[0]));
      }, 500);
    })
    .catch((err) => {
      console.log(err);
      dispatch(visible(true));
    });
  };
};

/*
 *  GET RECENT CITES
 */
export const fetchRecentCities = (userId) => {
  return dispatch => {
    dispatch(fetchRecentCitiesStart());

    axios.get('/currentWeather?userId=' + userId)
    .then((res) => {
      const data = res.data ? Object.values(res.data) : [];

      setTimeout(function() {
        dispatch(recentCity(data));
        dispatch(fetchRecentCitiesSuccess());
      }, 1000);
    })
    .catch((err) => console.log(err));
  };
};

/*
 *  POST RECENT CITES
 */
export const postRecentCities = (city, id, userId) => {
  return dispatch => {
    const data = {
      id: id,
      city: city,
      userId: userId
    };

    axios.post('/currentWeather', data)
    .then(() => {
      dispatch(recentCity([data]));
    })
    .catch((err) => console.log(err));
  };
};

/*
 *  DELETE RECENT CITES
 */
export const deleteRecentCities = (id) => {
  return dispatch => {
    const data = {
      id: id
    };

    axios.delete('/currentWeather', {
      data: {
        source: data
      }
    })
    .then(() => {
      dispatch(removeRecentCity(data.id));
    })
    .catch((err) => console.log(err));
  };
};