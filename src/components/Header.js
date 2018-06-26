import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/style.less';

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.container}>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/weather'>Weather</Link></li>
            </ul>
          </nav>
        </div>
      </div>   
    );
  }
}

export default Header;
