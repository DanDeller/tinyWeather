import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../assets/styles/style.less';

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/weather'>Current Weather Lookup</Link></li>
            <li><Link to='/fiveDayForecast'>Five Day Lookup</Link></li>
          </ul>
          <div
            className={`${style.mobileNav} ${style.navIcon} ${isOpen ? style.open : ''}`} 
            onClick={() => toggleOpen(!isOpen)}>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>   
  );
}

export default Header;
