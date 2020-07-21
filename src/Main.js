import PrivateRoute from './components/private-route/PrivateRoute';
import authWrapper from './components/auth-firebase/authWrapper';
import FiveDayForecast from './containers/FiveDayForecast/FiveDayForecast';
import WeatherMain from './containers/WeatherMain/WeatherMain';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import { AuthProvider } from './Auth';
import { connect } from 'react-redux';
import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={authWrapper} />
            {
              this.props.isAuth ? 
                [
                  <Route key={'weatherMain'} exact path='/weather' component={WeatherMain} />,
                  <Route key={'fiveDayForecast'} exact path='/fiveDayForecast' component={FiveDayForecast} />
                ] : 
                  // need to make a 404 component
                  <Route key={'404'} path='*' component={() => 'You do not have access to view this page. Go sign in first.'}/>
            }
            <Route path='*' component={() => '404 Page Not Found'}/>
          </Switch>
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