import React, { useState } from 'react';
import style from '../assets/styles/style.less';
import PropTypes from 'prop-types';

const SidebarItem = (props) => {
  const [recentCity, toggleCity] = useState({
    completed: false
  });

  const toggle = () => {
    toggleCity({
      completed: !recentCity.completed
    })
  }

  const city = props.city;
  return (
    <li
      style={{
        transform: !recentCity.completed ? 'translateY(0)' : 'translateX(-5vh)',
        opacity: !recentCity.completed ? '1' : '.4'
      }}
      className={`${style.sidebarItem} ${recentCity.completed ? 'sidebarActive' : 'sidebarUnactive'}`} onClick={() => toggle()}>{city.recentCity}</li>
  );
}

SidebarItem.propTypes = {
  city: PropTypes.object
};

export default SidebarItem;