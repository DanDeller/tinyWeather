import { useSelector } from 'react-redux';
import React from 'react';
import './easter-egg.css';

const EasterEgg = () => {
  const eggflag = useSelector(state => state.currentWeather); 

  return (
    <div className={`easter-egg ${(eggflag.easterEgg ? 'move-egg' : 'remove-egg')}`}>
      <img alt="mw" src={require("../../assets/easteregg/mw.gif")} />
      <audio data-id="egg" src={require("../../assets/easteregg/mj.wav")}></audio>
    </div>
  );
};

export default EasterEgg;