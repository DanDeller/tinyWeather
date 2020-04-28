import { recentCity } from '.';

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
    }).then(function() {
      dispatch(recentCity(city, id));
		});
  }
}

export default postRecentCities;