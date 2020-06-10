import React from 'react';
import style from '../../assets/styles/style.less';
import PropTypes from 'prop-types';

const Burger = ({isOpen, toggleOpen}) => {
  return (
    <div
      className={`${style.navIcon} ${isOpen ? style.open : ''}`} 
      onClick={() => toggleOpen(!isOpen)}>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
Burger.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default Burger;