import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

const initialState = {
  setCity: '',
  searchCity: '',
  recentCites: []
};

export default store;