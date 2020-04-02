import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import rootReducer from './reducers';
import logger from 'redux-logger';
import App from './App';
import store from './store/index';

window.store = store;

render((
	<Provider store={store}>
	  <HashRouter>
	    <App/>
	  </HashRouter>
	</Provider>
), document.getElementById('app'));