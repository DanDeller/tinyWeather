import React, { useState } from 'react';
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
    <li className={recentCity.completed ? 1 : 0} onClick={() => toggle()}>{city.recentCity}</li>
  );
}

SidebarItem.propTypes = {
  city: PropTypes.object
};

export default SidebarItem;