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

export const postRecentCities = (city, id) => {
  return dispatch => {
    const data = {
      id: id,
      city: city
    };
    fetch('/currentWeather', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
	      'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
    })
    .then(() => {
      dispatch(fetchRecentCities());
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export const deleteRecentCities = (id) => {
  console.log('hey');
  return dispatch => {
    const data = {
      id: id
    };
    fetch('/currentWeather', {
      method: 'DELETE',
			body: JSON.stringify(data)
    })
    .then(() => {
      dispatch(fetchRecentCities());
    })
    .catch((error) => {
      console.log(error);
    })
  }
}