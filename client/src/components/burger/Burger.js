import PropTypes from 'prop-types';
import React from 'react';
import './Burger.css';

const Burger = ({isOpen, toggleOpen}) => {
  return (
    <div
      className={`nav-icon ${isOpen ? 'open' : ''}`} 
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
};

Burger.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool
};

export default Burger;