import React from 'react';
import style from '../styles/style.less';

class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.container}>
          <img className={style.footerImage + ' ' + style.react} src={require('../../img/react.png')} />
          <img className={style.footerImage + ' ' + style.less} src={require('../../img/less.png')} />
          <img className={style.footerImage + ' ' + style.webpack} src={require('../../img/webpack.png')} />
          <img className={style.footerImage + ' ' + style.babel} src={require('../../img/babel.png')} />
          <img className={style.footerImage + ' ' + style.node} src={require('../../img/node.png')} />
        </div>
      </footer>
    );
  }
}

export default Footer;