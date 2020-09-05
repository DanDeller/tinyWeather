import WeatherLookupSpinner from './components/spinner/WeatherLookupSpinner';
import WeatherIcons from './components/weather/WeatherIcons';
import style from './assets/styles/styles-default.scss';
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import ErrorModal from './components/modal/Modal';
import Main from './Main';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className={style.wrap}>
        <Header />
        <Main />
        <Footer />
        <WeatherLookupSpinner />
        <ErrorModal />
        <WeatherIcons animate={true} />
      </div>
    );
  }
};

export default App;