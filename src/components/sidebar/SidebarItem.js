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
      className={style.sidebarItem}
      onClick={() => toggle()}>
      <p
        style={{
          transform: !recentCity.completed ? 'translateY(0)' : 'translateX(-5vh)',
          opacity: !recentCity.completed ? '1' : '.4'
        }}>
        {city.city}
      </p>
      <button
        style={{
          display: recentCity.completed ? 'flex' : 'none'
        }}>Remove
      </button>  
    </li>
  );
}

SidebarItem.propTypes = {
  city: PropTypes.object,
  recentCity: PropTypes.object
};

export default SidebarItem;