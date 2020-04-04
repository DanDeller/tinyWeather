import React from 'react';
import style from '../assets/styles/style.less';

class Home extends React.Component {
  render() {
    return (
      <section className={style.container + ' ' + style.bodyText + ' ' + style.home}>
        <h2 className={style.pageHeader}>Welcome to tinyWeather. A tiny weather app.</h2>
        <p>tinyWeather is built with reactJS, styled with LESS (or SASS), is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      </section>
    );
  }
}

export default Home;