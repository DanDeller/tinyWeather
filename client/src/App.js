import WeatherIcons from './components/weather/WeatherIcons';
import style from './assets/styles/styles-default.css';
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import React, { Suspense } from 'react';
import Main from './Main';

const WeatherLookupSpinner = React.lazy(() => import('./components/spinner/WeatherLookupSpinner'));
const ErrorModal = React.lazy(() => import('./components/modal/Modal'));

function App() {
  return (
    <div className={style.wrap}>
      <Header />
      <Main />
      <Footer />
      <Suspense fallback={<div className="tagline app-load"></div>}>
        <WeatherLookupSpinner />
        <ErrorModal />
      </Suspense>
      <WeatherIcons animate={true} />
    </div>
  );
};

export default App;