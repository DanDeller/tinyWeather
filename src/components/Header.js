import React from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/styles/style.less';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/weather'>Current Weather Lookup</Link></li>
            <li><Link to='/fiveDayForecast'>Five Day Lookup</Link></li>
          </ul>
        </nav>
      </div>
    </header>   
  );
}

export default Header;
