import React from 'react';
import style from '../styles/style.less';

class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.container}>
          <p>footer here </p>
        </div>
      </div>
    );
  }
}

export default Footer;