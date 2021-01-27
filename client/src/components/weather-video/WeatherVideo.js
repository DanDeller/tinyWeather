import PropTypes from 'prop-types';
import './WeatherVideo.css';
import React from 'react';

const WeatherVideo = ({setVideo}) => {
  return (
    <video key={setVideo} className="video" playsInline loop autoPlay muted>
      <source src={setVideo} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
  )
};

WeatherVideo.propTypes = {
  setVideo: PropTypes.string
};

export default WeatherVideo;