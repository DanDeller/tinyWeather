import React from 'react';
import PropTypes from 'prop-types';

const WeatherVideo = ({setVideo}) => {
  return (
    <video key={setVideo} className="video" loop autoPlay muted>
      <source src={setVideo} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
  )
}

WeatherVideo.propTypes = {
  setVideo: PropTypes.string
};

export default WeatherVideo;