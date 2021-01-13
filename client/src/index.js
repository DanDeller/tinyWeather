import AuthProvider from './context/AuthContext';
import { HashRouter } from 'react-router-dom';
import store from './redux/store/index';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import axios from 'axios';
import App from './App';

window.store = store;

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
		<AuthProvider>
			<HashRouter>
				<App/>
			</HashRouter>
		</AuthProvider>
	</Provider>
), document.getElementById('root'));