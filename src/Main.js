import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import WeatherMain from './containers/WeatherMain';
import FiveDayForecast from './containers/FiveDayForecast';
import style from './assets/styles/style.less';

class Main extends React.Component {
  render() {
    return (
      <main className={style.main}>
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