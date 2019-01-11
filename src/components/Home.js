import React from 'react';
import style from '../styles/style.less';

class Home extends React.Component {
  render() {
    return (
      <section className={style.container + ' ' + style.bodyText}>
        <h1 className={style.heading}>Welcome to tinyWeather. A tiny weather app.</h1>
        <p>tinyWeather is built with reactJS, styled with LESS (or SASS), is bundled with webpack, leverages babel to utilize es6 and runs on nodeJS.</p>  
      </section>
    );
  }
}

export default Home;