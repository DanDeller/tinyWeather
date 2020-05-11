import React from 'react';
import PropTypes from 'prop-types';

const RemoveCity = (props) => {
  return (
    <button
      style={{
        display: props.recentCity ? 'flex' : 'none'
      }}>Remove
    </button>
  )
}

RemoveCity.propTypes = {
  recentCity: PropTypes.bool
};

export default RemoveCity;