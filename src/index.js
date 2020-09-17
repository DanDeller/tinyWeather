import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { render } from 'react-dom';
import React from 'react';
// import axios from 'axios';
import App from './App';

window.store = store;

// set base URL for axios to avoid repetitive long strings
// axios.defaults.baseURL = 'https://somewhere.com/';

// axios.interceptors.request.use(request => {
// 	console.log(request);
// 	return request;
// }, error => {
// 	console.log(error);
// 	return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
// 	console.log(response);
// 	return response;
// }, error => {
// 	console.log(error);
// 	return Promise.reject(error);
// });

setTimeout(() => {
	render((
		<Provider store={store}>
			<HashRouter>
				<App/>
			</HashRouter>
		</Provider>
	), document.getElementById('root'));
}, 0);
