import {
  postRecentCitiesPending, 
  postRecentCitiesSuccess, 
  postRecentCitiesError
} from '.';

const postRecentCities = () => {
  return dispatch => {
    dispatch(postRecentCitiesPending());
    fetch('/currentWeather', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(postRecentCitiesSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(postRecentCitiesError(error));
    })
  }
}

export default postRecentCities;