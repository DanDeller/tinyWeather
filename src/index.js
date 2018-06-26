import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from './app';

render((
  <Router>
    <App/>
  </Router>
), document.getElementById('app'));