import React from 'react';
import Header from './components/Header';
import Main from './Main';
import style from './styles/style.less';

class App extends React.Component {
  render () {
    return (
      <div className={style.wrap}>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;