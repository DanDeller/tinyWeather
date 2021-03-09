import * as actions from '../../redux/actions/currentWeather';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const SidebarItem = ({id, recentCity}) => {
  const city = recentCity;
  const dispatch = useDispatch();
  const deleteCity = () => dispatch(actions.deleteRecentCities(id));
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  const searchSidebarCity = () => {
    dispatch(actions.getWeather(city, isAuthenticated.userId));
    dispatch(actions.setCity(city));
    dispatch(actions.runEasterEgg(false));
  };

  return (
    <div className="sidebar-item" id={id}>
      <p onClick={searchSidebarCity}>{city}</p>
      <p onClick={deleteCity}>x</p>
    </div>
  );  
};

SidebarItem.propTypes = {
  recentCity: PropTypes.string,
  dispatch: PropTypes.func,
  city: PropTypes.string,
  id: PropTypes.string
};

export default SidebarItem;