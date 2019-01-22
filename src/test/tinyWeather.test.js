import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import WeatherMain from '../components/WeatherMain';

configure({ adapter: new Adapter() });

describe('Initial tests', () => {
  it('renders without crashing', () => {
    const context = {},
          div     = document.createElement('div');

    ReactDOM.render(
      <StaticRouter location='' context={context}>
        <App />
      </StaticRouter>,
    div);
  });

  it('Should have inputs', () => {
    const wrapper = mount(<WeatherMain></WeatherMain>);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
