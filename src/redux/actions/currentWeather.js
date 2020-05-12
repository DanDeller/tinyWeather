/* 
 * MAIN ACTIONS INDEX FILE
 * - WeatherMain.js
 *  - setCity, setDetails, recentCity, isOpen, visible, setVideo
 * 
 * - Async calls
 *  - fetchRecentCities 
 */

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
    fetch('/currentWeather')
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(recentCity(res));
    })
    .catch(error => {
      console.log(error);
    })
  }
}