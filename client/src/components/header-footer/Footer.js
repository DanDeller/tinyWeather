import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img className="footerImage react" src={require('../../assets/img/react.png')} alt='react' />
        <img className="footerImage webpack" src={require('../../assets/img/webpack.png')} alt='webpack' />
        <img className="footerImage mongodb" src={require('../../assets/img/mongodb.png')} alt='babel' />
        <img className="footerImage node" src={require('../../assets/img/node.png')} alt='node' />
      </div>
    </footer>
  );
};

export default Footer;