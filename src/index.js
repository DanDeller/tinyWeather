import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import App from './app';
import store from './store/index';
window.store = store;

// const store = createStore(
// 	rootReducer,
// 	applyMiddleware(logger)
// );

render((
	<Provider store={store}>
	  <Router>
	    <App/>
	  </Router>
	</Provider>
), document.getElementById('app'));