import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {
  render() {
    const getRecentCities = this.props.recentCities.map((city, i) => (
      <SidebarItem 
        key={i}
        id={city.id}
        recentCity={city} 
      />
    ));
  
    return (
      <aside className="sideBar">
        <h3>Recently Searched Cities</h3>
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
