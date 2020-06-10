import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../assets/styles/style.less';
import Burger from '../burger/Burger';

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.navHold}>
          <p className={`${style.pageHeader} ${style.logo}`}>TW</p>
          <nav className={`${isOpen ? style.open : ''}`}>
            <ul>
              <li>
                <NavLink 
                  to='/' exact 
                  activeClassName={style.currentLink} 
                  onClick={() => toggleOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/weather' 
                  activeClassName={style.currentLink}
                  onClick={() => toggleOpen(false)}>
                  Current Weather Lookup
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/fiveDayForecast' 
                  activeClassName={style.currentLink}
                  onClick={() => toggleOpen(false)}>
                  Five Day Lookup
                </NavLink>
              </li>
            </ul>
          </nav>
          
          <Burger 
            isOpen={isOpen}
            toggleOpen={toggleOpen}
          />
        </div>
      </div>
    </header>   
  );
}

export default Header;
