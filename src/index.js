import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store/index';

window.store = store;

render((
	<Provider store={store}>
	  <HashRouter>
	    <App/>
	  </HashRouter>
	</Provider>
), document.getElementById('app'));