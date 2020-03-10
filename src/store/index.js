import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  setCity: '',
  searchCity: ''
};

const store = createStore(reducer);

export default store;