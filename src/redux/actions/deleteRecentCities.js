import fetchRecentCities from './fetchRecentCities';

const deleteRecentCities = (id) => {
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

export default deleteRecentCities;