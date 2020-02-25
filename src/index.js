import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './app';

const store = createStore(rootReducer);

render((
	<Provider store={store}>
	  <Router>
	    <App/>
	  </Router>
	</Provider>
), document.getElementById('app'));