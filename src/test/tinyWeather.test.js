import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import App from '../App';

it('renders without crashing', () => {
  const context = {},
        div     = document.createElement('div');

  ReactDOM.render(
    <StaticRouter location='' context={context}>
      <App />
    </StaticRouter>,
  div);
});