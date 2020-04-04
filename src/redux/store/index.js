import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middlewares = [thunk];
const store = createStore(reducer);

export default store;