import {
  fetchRecentCitiesSuccess,
  // fetchRecentCitiesPending,
  // fetchRecentCitiesError
} from '.';

const fetchRecentCities = () => {
  return dispatch => {
    // dispatch(fetchRecentCitiesPending());
    fetch('/currentWeather')
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(fetchRecentCitiesSuccess(res));
      return res;
    })
    // .catch(error => {
    //   dispatch(fetchRecentCitiesError(error));
    // })
  }
}

export default fetchRecentCities;