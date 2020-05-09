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
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={() => toggle()}>
      <p
      className={`${style.sidebarItem} ${recentCity.completed ? 'sidebarActive' : 'sidebarUnactive'}`}
      style={{
        transform: !recentCity.completed ? 'translateY(0)' : 'translateX(-5vh)',
        opacity: !recentCity.completed ? '1' : '.4'
      }}>{city.city}</p>
      <button
        style={{
          background: 'none',
          border: '1px solid #fff',
          borderRadius: '2px',
          boxShadow: '0px 0px 10px -4px #7A2929',
          color: '#fff',
          cursor: 'pointer',
          textShadow: '0 1px 1px #7A2929',
          display: recentCity.completed ? 'flex' : 'none'
        }}  
      >Remove</button>  
    </li>
  );
}

SidebarItem.propTypes = {
  city: PropTypes.object,
  recentCity: PropTypes.object
};

export default SidebarItem;