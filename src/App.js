// import ParticleWrap from './components/particles/ParticleWrap';
import WeatherIcons from './components/weather/WeatherIcons';
import style from './assets/styles/styles-default.scss';
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import Main from './Main';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className={style.wrap}>
        <Header />
        <Main />
        <Footer />
        <WeatherIcons animate={true} />
        {/* ParticleWrap is animation heavy,
        only use for auth background when ready
        <ParticleWrap /> */}
      </div>
    );
  }
};

export default App;