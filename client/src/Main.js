import FiveDayForecast from './containers/FiveDayForecast/FiveDayForecast';
import { spring, AnimatedSwitch } from 'react-router-transition';
import WeatherMain from './containers/WeatherMain/WeatherMain';
import PrivateRoute from './hocs/PrivateRoute';
import About from './components/about/About';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const Login = React.lazy(() => import('./components/auth/Login'));
const Register = React.lazy(() => import('./components/auth/SignUp'));

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

function Main() {
  return (
    <main className="main">
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' render={() => (<Suspense fallback={<></>}><Login/></Suspense>)} />
        <Route exact path='/register' render={() => (<Suspense fallback={<></>}><Register/></Suspense>)} />
        <PrivateRoute key={'weatherMain'} exact path='/weather' component={WeatherMain} />
        <PrivateRoute key={'fiveDayForecast'} exact path='/fiveDayForecast' component={FiveDayForecast} />
        <Route path='*' component={() => '404 Page Not Found'}/>
      </AnimatedSwitch>
    </main>
  );
};

export default Main;