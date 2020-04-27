import {
  postRecentCitiesPending, 
  // postRecentCitiesSuccess, 
  postRecentCitiesError
} from '.';

const postRecentCities = (city, id) => {
  return dispatch => {
    const data = {
      id: id,
      city: city
    };
    dispatch(postRecentCitiesPending());
    fetch('/currentWeather', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
	      'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
    }).then(function() {
			console.log(data);
		});
  }
}

export default postRecentCities;