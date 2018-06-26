import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Weather from './components/Weather';
import style from './styles/style.less';

class Main extends React.Component {
  render() {
    return (
      <main className={style.main}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={Weather} />
        </Switch>
      </main>
    );
  }
}

export default Main;