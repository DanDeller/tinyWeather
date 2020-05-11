import React from 'react';

const RemoveCity = (props) => {
  return (
    <button
      style={{
        display: props.recentCity ? 'flex' : 'none'
      }}>Remove
    </button>
  )
}

export default RemoveCity;