import AuthProvider from './context/AuthContext.js';
import { HashRouter } from 'react-router-dom';
import store from './redux/store/index';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import axios from 'axios';
import App from './App';

window.store = store;

axios.defaults.baseURL = 'https://tiny-weather-65aa3.firebaseio.com/';

render((
	<Provider store={store}>
		<AuthProvider>
			<HashRouter>
				<App/>
			</HashRouter>
		</AuthProvider>
	</Provider>
), document.getElementById('root'));