import React from 'react';
import style from '../styles/style.less';

class Home extends React.Component {
  render() {
    return (
      <div className={style.container + ' ' + style.bodyText}>
        <p>Home content here</p>  
      </div>
    );
  }
}

export default Home;