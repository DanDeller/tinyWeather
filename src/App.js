import React from 'react';
import Header from './components/header-footer/Header';
import Main from './Main';
import Footer from './components/header-footer/Footer';
import style from './assets/styles/styles.scss';

class App extends React.Component {
  render () {
    return (
      <div className={style.wrap}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;