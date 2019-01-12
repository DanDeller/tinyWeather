import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import WeatherMain from './components/WeatherMain';
import style from './styles/style.less';

class Main extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={WeatherMain} />
        </Switch>
      </main>
    );
  }
}

export default Main;