import * as actions from '../../redux/actions/currentWeather';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SidebarItem = ({id, recentCity}) => {
  const [toggleState, setToggle] = useState(false);
  const dispatch = useDispatch();
  const city = recentCity;

  const toggle = () => {
    setToggle(!toggleState);
  };

  const deleteCity = () => {
    dispatch(actions.deleteRecentCities(id));
  };

  return (
    <div
      className="sidebarItem"
      onClick={toggle}
      id={id}>
      <p
        style={{
          transform: !toggleState ? 'translateY(0)' : 'translateX(-5vh)',
          opacity: !toggleState ? '1' : '.4'
        }}>
        {city}
      </p>
      <button
        onClick={deleteCity}
        style={{
          display: toggleState ? 'flex' : 'none'
        }}>
        Remove
      </button>
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