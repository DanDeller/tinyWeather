import React from 'react';
import style from '../assets/styles/style.less';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem.js';

class Sidebar extends React.Component {
  render() {
    const getRecentCities = this.props.recentCities.map((city, i) => (
      <SidebarItem key={i} city={city} />
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

Sidebar.propTypes = {
  recentCities: PropTypes.array
};

export default Sidebar;