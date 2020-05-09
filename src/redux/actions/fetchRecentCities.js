import { fetchRecentCitiesError, recentCity } from '.';

const fetchRecentCities = () => {
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
      dispatch(fetchRecentCitiesError(error));
    })
  }
}

export default fetchRecentCities;