import WeatherIcons from './components/weather/WeatherIcons';
import style from './assets/styles/styles-default.scss';
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import ErrorModal from './components/modal/Modal';
import React, { Suspense } from 'react';
import Main from './Main';

function App() {
  return (
    <div className={style.wrap}>
      <Header />
      <Main />
      <Footer />
      <ErrorModal />
      <WeatherIcons animate={true} />
    </div>
  );
};

export default App;