import * as actions from '../../redux/actions/currentWeather';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const SidebarItem = ({id, recentCity}) => {
  const city = recentCity;
  const dispatch = useDispatch();
  const deleteCity = () => dispatch(actions.deleteRecentCities(id));

  return (
    <div className="sidebar-item" id={id}>
      <p>{city}</p>
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