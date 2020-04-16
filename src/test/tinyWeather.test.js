// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { StaticRouter } from 'react-router';
// import { configure, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from '../App';
// import WeatherMain from '../components/WeatherMain';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';

// configure({adapter: new Adapter()});

// const store = createStore(rootReducer);

// describe('Initial tests', () => {
//   it('renders without crashing', () => {
//     const context = {},
//           div     = document.createElement('div');

//     ReactDOM.render(
//       <Provider store={store}>
//         <StaticRouter location='' context={context}>
//           <App />
//         </StaticRouter>
//       </Provider>,
//     div);
//   });

//   it('has all proper inputs', () => {
//     const wrapper = mount(<WeatherMain></WeatherMain>);
//     expect(wrapper.find('input').exists()).toBe(true);
//   });
// });

// describe('when user searches for new city', () => {
//   it('calls proper functin to search for city', () => {
//     const onButtonClickMock = jest.fn();
//     const wrapper = shallow(
//       <WeatherMain
//         onButtonClick={onButtonClickMock}
//       />,
//     );

//     console.log(JSON.stringify(wrapper) + ' <- WRAPPER!!!!!!');

//     const buttonElement = wrapper.find('.searchCity');
//     buttonElement.simulate('click');

//     expect(onButtonClick).toHaveBeenCalledTimes(1);
//     expect(onButtonClickMock).toHaveBeenCalledWith(true);

//   });
// });
