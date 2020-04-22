import {
  fetchProductsPending, 
  fetchProductsSuccess, 
  fetchProductsError
} from '../actions';

const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('/currentWeather')
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        throw(res.error);
      }
      dispatch(fetchProductsSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    })
  }
}

export default fetchProducts;