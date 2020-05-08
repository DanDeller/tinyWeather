import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store/index';
import axios from 'axios';

window.store = store;

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
	console.log(request);
	return request;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

axios.interceptors.response.use(response => {
	console.log(response);
	return response;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

render((
	<Provider store={store}>
	  <HashRouter>
	    <App/>
	  </HashRouter>
	</Provider>
), document.getElementById('app'));