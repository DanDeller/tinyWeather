import React from 'react';
import style from '../styles/style.less';

class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.container}>
          <img className={style.footerImage + ' ' + style.react} src={require('../../src/img/react.png')} />
          <img className={style.footerImage + ' ' + style.less} src={require('../../src/img/less.png')} />
          <img className={style.footerImage + ' ' + style.webpack} src={require('../../src/img/webpack.png')} />
          <img className={style.footerImage + ' ' + style.babel} src={require('../../src/img/babel.png')} />
          <img className={style.footerImage + ' ' + style.node} src={require('../../src/img/node.png')} />
        </div>
      </footer>
    );
  }
}

export default Footer;