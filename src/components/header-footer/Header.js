import * as authActions from '../../redux/actions/isAuthenticated';
import { AuthContext } from '../../Context/AuthContext';
import AuthService from '../../Services/AuthService';
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import Burger from '../burger/Burger';
import './HeaderFooter.scss';

const Header = ({history}) => {
  // Not user from AuthContext - { user }
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

  const unauthenticatedNavBar = () => {
    return (
      <>
        <li key={'home'}>
          <NavLink 
            to='/about' 
            exact 
            activeClassName="currentLink"
            onClick={() => toggleOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/login' 
            exact 
            activeClassName="currentLink"
            onClick={() => toggleOpen(false)}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/register' 
            exact 
            activeClassName="currentLink"
            onClick={() => toggleOpen(false)}>
            Register
          </NavLink>
        </li>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <li key={'home'}>
          <NavLink 
            to='/' 
            exact 
            activeClassName="currentLink"
            onClick={() => toggleOpen(false)}>
            Home
          </NavLink>
        </li>
        <li key={'weather'}>
          <NavLink 
            to='/weather' 
            activeClassName="currentLink"
            onClick={() => toggleOpen(false)}>
            Current Weather Lookup
          </NavLink>
        </li>
        <li key={'forecase'}> 
          <NavLink 
            to='/fiveDayForecast' 
            activeClassName="currentLink"
            onClick={() => toggleOpen(false)}>
            Five Day Lookup
          </NavLink>
        </li>
        <li key={'logout'}>
          <button className="sign-out" onClick={handleLogout}>Sign out</button>
        </li>
      </>
    );
  };

  const [isOpen, toggleOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
        history.push('/about');
      };
    });
    
    history.push('/');
    dispatch(authActions.setIsAuthenticated(false));
    dispatch(authActions.setTokenId(null));
    dispatch(authActions.setUserId(null));
    toggleOpen(false);
    localStorage.removeItem('expirationDate');
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
              { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar() }
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
};

export default withRouter(Header);
