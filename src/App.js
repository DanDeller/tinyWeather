import React from 'react';
import Header from './components/common/Header';
import Main from './Main';
import Footer from './components/common/Footer';
import style from './assets/styles/style.less';

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