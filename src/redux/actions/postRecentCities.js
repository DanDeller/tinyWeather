import fetchRecentCities from './fetchRecentCities';

const postRecentCities = (city, id) => {
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

export default postRecentCities;