import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchDaysSuccess = days => ({
  type: actionTypes.FETCH_DAYS_SUCCESS,
  days: days
});

export const fetchDaysStart = () => ({
  type: actionTypes.FETCH_DAYS_START
});

export const setFetchFlag = fetchFlag => ({
  type: actionTypes.FETCH_FLAG,
  fetchFlag: fetchFlag
});

export const fetchDays = city => {
  return dispatch => {
    if (!city.length) {
      return;
    } else {
      dispatch(fetchDaysStart());
      const cityState = city.split(',');

      // Use the below comment to avoid eslint warnings. Reason: an extra space being added when using a comma after a template literal.
      // eslint-disable-next-line
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityState[0]}\,,${cityState[1]}&appid=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`)
      .then(res => {
        const newData = res.data.list.filter(({dt_txt}) => {
          return dt_txt.split(' ')[1] === '15:00:00';
        });

        dispatch(fetchDaysSuccess(newData));
      })
      .catch((error) => console.log(error));
    };
  };
};