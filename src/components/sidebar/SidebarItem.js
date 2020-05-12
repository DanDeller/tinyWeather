import React, { useState } from 'react';
import style from '../../assets/styles/style.less';
import PropTypes from 'prop-types';

import RemoveCity from '../remove-city/RemoveCity'

const SidebarItem = (props) => {
  const city = props.recentCity;
  
  const [recentCity, toggleCity] = useState({
    toggleDelete: false
  });

  const toggle = () => {
    toggleCity({
      toggleDelete: !recentCity.toggleDelete
    })
  }
  
  return (
    <li
      className={style.sidebarItem}
      onClick={() => toggle()}>
      <p
        style={{
          transform: !recentCity.toggleDelete ? 'translateY(0)' : 'translateX(-5vh)',
          opacity: !recentCity.toggleDelete ? '1' : '.4'
        }}>
        {city.city}
      </p>
      <RemoveCity 
        recentCity={recentCity.toggleDelete} 
      />
    </li>
  );
}

SidebarItem.propTypes = {
  city: PropTypes.object,
  recentCity: PropTypes.object
};

export default SidebarItem;