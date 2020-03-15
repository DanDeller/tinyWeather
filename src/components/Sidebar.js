import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';

const Sidebar = (city) => {
  const getRecentCities = city.recentCities.map((city, i) => (
    <li key={i}>{city}</li>
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

export default Sidebar;