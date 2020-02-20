import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/style.less';

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.container}>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/weather'>Weather Lookup</Link></li>
              <li><Link to='/fiveDayForecast'>Five Day Lookup</Link></li>
            </ul>
          </nav>
        </div>
      </header>   
    );
  }
}

export default Header;
