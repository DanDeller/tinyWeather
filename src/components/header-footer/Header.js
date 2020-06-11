import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../burger/Burger';

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="navHold">
          <p className="pageHeader logo">TW</p>
          <nav className={`${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink 
                  to='/' exact 
                  activeClassName="currentLink"
                  onClick={() => toggleOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/weather' 
                  activeClassName="currentLink"
                  onClick={() => toggleOpen(false)}>
                  Current Weather Lookup
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/fiveDayForecast' 
                  activeClassName="currentLink"
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
