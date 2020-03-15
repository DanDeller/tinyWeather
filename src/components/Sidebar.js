import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {
  render() {
    const getRecentCities = this.props.recentCities.map((city) => (
      <li key={city.id}>{city.recentCity}</li>
    ));  

    return (
      <aside className={style.sideBar}>
        <h3>Recently Searched Cities:</h3>
        <ul>
          {getRecentCities}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;