import * as actions from '../../redux/actions/isAuthenticated';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Burger from '../burger/Burger';
import app from '../../base';

const Header = ({isAuth, history}) => {
  const [isOpen, toggleOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    app.auth().signOut();
    history.push('/');
    dispatch(actions.setIsAuthenticated(false));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="navHold">
          <NavLink 
            className="pageHeader logo"
            to='/' 
            exact>
            TW
          </NavLink>
          <nav className={`${isOpen ? 'open' : ''}`}>
            <ul>
              <li key={'home'}>
                <NavLink 
                  to='/' 
                  exact 
                  activeClassName="currentLink"
                  onClick={() => toggleOpen(false)}>
                  Home
                </NavLink>
              </li>
              {!!isAuth ?
              [<li key={'weather'}>
                <NavLink 
                  to='/weather' 
                  activeClassName="currentLink"
                  onClick={() => toggleOpen(false)}>
                  Current Weather Lookup
                </NavLink>
              </li>,
              <li key={'forecase'}> 
                <NavLink 
                  to='/fiveDayForecast' 
                  activeClassName="currentLink"
                  onClick={() => toggleOpen(false)}>
                  Five Day Lookup
                </NavLink>
              </li>,
              <li key={'logout'}><button className="sign-out" onClick={handleLogout}>Sign out</button></li>] :
              ''
              }
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

export default withRouter(Header);
