import React from 'react';
import style from '../assets/styles/style.less';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img className={style.footerImage + ' ' + style.react} src={require('../assets/img/react.png')} />
        <img className={style.footerImage + ' ' + style.less} src={require('../assets/img/less.png')} />
        <img className={style.footerImage + ' ' + style.webpack} src={require('../assets/img/webpack.png')} />
        <img className={style.footerImage + ' ' + style.babel} src={require('../assets/img/babel.png')} />
        <img className={style.footerImage + ' ' + style.node} src={require('../assets/img/node.png')} />
      </div>
    </footer>
  );
}

export default Footer;