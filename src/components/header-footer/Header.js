import * as fetchFlagActions from '../../redux/actions/fiveDayForecast';
import * as weatherActions from '../../redux/actions/currentWeather';
import * as authActions from '../../redux/actions/isAuthenticated';
import { AuthContext } from '../../Context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../../Services/AuthService';
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Burger from '../burger/Burger';
import './HeaderFooter.scss';

const Header = ({history}) => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
  const fiveDayForecast = useSelector(state => state.fiveDayForecast);
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

    dispatch(weatherActions.reset_action())
    dispatch(weatherActions.isOpen(true));
    dispatch(weatherActions.setVideo(''));
    dispatch(weatherActions.setCity(''));
    dispatch(fetchFlagActions.setFetchFlag(!!fiveDayForecast.fetchFlag));
    
    dispatch(authActions.setIsAuthenticated(false));
    dispatch(authActions.setTokenId(null));
    dispatch(authActions.setUserId(null));
    toggleOpen(false);
    localStorage.removeItem('tinyWeatherToken');
    localStorage.removeItem('expirationDate');
  };

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
