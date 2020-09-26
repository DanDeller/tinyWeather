import Particles from 'react-particles-js';
import React from 'react';

const ParticleWrap = () => {
  return (
    <Particles
      params={{
        'particles': {
          'number': {
            'value': 40,
            'density': {
              'value_area': 500
            }
          },
          'line_linked': {
            'enable': true,
            'opacity': 0.5
          },
          'size': {
            'value': 3
          }
        },
        'interactivity': {
          'events': {
            "onhover": {
              'enable': true,
              'mode': 'repulse'
            }
          }
        }
      }} 
    />
  );
};

export default ParticleWrap;