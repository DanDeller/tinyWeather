import WeatherLookupSpinner from './components/spinner/WeatherLookupSpinner';
// import ParticleWrap from './components/particles/ParticleWrap';
import WeatherIcons from './components/weather/WeatherIcons';
import style from './assets/styles/styles-default.scss';
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import { connect } from 'react-redux';
import Main from './Main';
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className={style.wrap}>
        {/* ParticleWrap is animation heavy,
        only use for auth background when ready
        <ParticleWrap /> */}
        <Header isAuth={this.props.isAuth}/>
        <Main/>
        <Footer/>
        <WeatherIcons animate={true} />
        <WeatherLookupSpinner 
          weatherLoading={this.props.weatherLoading}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    weatherLoading: state.currentWeather.weatherLoading,
    isAuth: state.isAuthenticated.isAuthenticated
  }
};

export default connect(mapStateToProps)(App);