import React from 'react';
import style from '../styles/style.less';

class WeatherList extends React.Component {
  render() {
    const classes = !this.props.isOpen ? style.active : '';
    const city = this.props.cityDetails.map((item, i) => (
      <div className={style.weatherItem} key={i}>
        <h3>City: {item.name}</h3>
        <p>Current weather: {item.weather}</p>
        <p>Current temperature: {item.temp}</p>
      </div>
    ));

    return (
      <div className={style.weatherItems + ' ' + classes}>
        {city}
      </div>
    );
  }
}

export default WeatherList;