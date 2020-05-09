import React, { useState } from 'react';
import style from '../../assets/styles/style.less';
import PropTypes from 'prop-types';

const SidebarItem = (props) => {
  const city = props.recentCity;
  
  const [recentCity, toggleCity] = useState({
    completed: false
  });

  const toggle = () => {
    toggleCity({
      completed: !recentCity.completed
    })
  }
  
  return (
    <li
      style={{
        transform: !recentCity.completed ? 'translateY(0)' : 'translateX(-5vh)',
        opacity: !recentCity.completed ? '1' : '.4'
      }}
      className={`${style.sidebarItem} ${recentCity.completed ? 'sidebarActive' : 'sidebarUnactive'}`} 
      onClick={() => toggle()}>
      {city.city}
    </li>
  );
}

SidebarItem.propTypes = {
  city: PropTypes.object,
  recentCity: PropTypes.object
};

export default SidebarItem;