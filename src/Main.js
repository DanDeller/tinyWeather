import FiveDayForecast from './containers/FiveDayForecast/FiveDayForecast';
import { spring, AnimatedSwitch } from 'react-router-transition';
import WeatherMain from './containers/WeatherMain/WeatherMain';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import { AuthProvider } from './Auth';
import { connect } from 'react-redux';
import React from 'react';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
};

function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 20
  });
};

const bounceTransition = {
  // start state
  atEnter: {
    opacity: 0,
    scale: 1.1
  },
  // leave state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // rest state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <AuthProvider>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route exact path='/' component={Home} />
            <Route key={'weatherMain'} exact path='/weather' component={WeatherMain} />
            <Route key={'fiveDayForecast'} exact path='/fiveDayForecast' component={FiveDayForecast} />
            <Route path='*' component={() => '404 Page Not Found'}/>
          </AnimatedSwitch>
        </AuthProvider>
      </main>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuth: state.isAuthenticated.isAuthenticated
  }
};

export default connect(mapStateToProps)(Main);