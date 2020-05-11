import React from 'react';
import style from '../../assets/styles/style.less';
import PropTypes from 'prop-types';

const WeatherVideo = (props) => {
  return (
    <video key={props.setVideo} className={style.video} loop autoPlay muted>
      <source src={props.setVideo} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
  )
}

WeatherVideo.propTypes = {
  setVideo: PropTypes.string
};

export default WeatherVideo;