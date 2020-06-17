import FiveDayForecast from './containers/FiveDayForecast';
import WeatherMain from './containers/WeatherMain';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={WeatherMain} />
          <Route path='/fiveDayForecast' component={FiveDayForecast} />
        </Switch>
      </main>
    );
  }
}

export default Main;