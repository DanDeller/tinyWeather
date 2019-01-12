import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';
import WeatherForm from './WeatherForm';

class Sidebar extends React.Component {
  render() {
    const getRecentCities = this.props.recentCities.map((city, i) => (
      <li key={i}>{city}</li>
    ));

    return (
      <aside className={style.sideBar}>
        <h3>Recent Cities:</h3>
        <ul>
          {getRecentCities}
        </ul>
      </aside>
    )
  }
}

export default Sidebar;