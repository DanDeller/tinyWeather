import { spring, AnimatedSwitch } from 'react-router-transition';
import AuthWrapper from './components/auth/authWrapper';
import PrivateRoute from './hocs/PrivateRoute';
import { Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const FiveDayForecast = React.lazy(() => import('./containers/FiveDayForecast/FiveDayForecast'));
const WeatherMain = React.lazy(() => import('./containers/WeatherMain/WeatherMain'));
const Home = React.lazy(() => import('./components/home/Home'));

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
  atEnter: {
    opacity: 0,
    scale: .6
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.6)
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

function Main() {
  return (
    <main className="main">
      <Suspense fallback={<div className="tagline app-load">Loading...</div>}>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/home' component={AuthWrapper} /> 
          <PrivateRoute key={'weatherMain'} exact path='/weather' component={WeatherMain} />
          <PrivateRoute key={'fiveDayForecast'} exact path='/fiveDayForecast' component={FiveDayForecast} />
          <Route path='*' component={() => '404 Page Not Found'}/>
        </AnimatedSwitch>
      </Suspense>
    </main>
  );
};

export default Main;