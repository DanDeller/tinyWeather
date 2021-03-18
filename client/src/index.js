import AuthProvider from './context/AuthContext';
import { HashRouter } from 'react-router-dom';
import store from './redux/store/index';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import App from './App';

window.store = store;

render((
	<Provider store={store}>
		<AuthProvider>
			<HashRouter>
				<App/>
			</HashRouter>
		</AuthProvider>
	</Provider>
), document.getElementById('root'));