import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SidebarSpinner from '../spinner/SidebarSpinner';
import { useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const currentWeather = useSelector(state => state.currentWeather);

  return (
    <aside className="side-bar">
      <h3>Recently Searched Cities</h3>
      <SidebarSpinner
        sidebarLoading={currentWeather.sidebarLoading}
      />
      <ul>
        <CSSTransitionGroup
          transitionName="list-item"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeave={true}
          transitionLeaveTimeout={300}>
          {currentWeather.recentCities.map((city, i) => (
            <li 
              key={i}
              className="sidebar-Item">
                <SidebarItem 
                  key={i}
                  id={city.id}
                  recentCity={city.city} 
                />
              </li>
            ))
          }
        </CSSTransitionGroup>
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  recentCities: PropTypes.array
};

export default Sidebar;
