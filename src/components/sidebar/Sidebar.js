import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SidebarSpinner from '../spinner/SidebarSpinner';
import SidebarItem from './SidebarItem';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  const currentWeather = useSelector(state => state.currentWeather);

  // currentWeather.recentCities.map((city, i) => {
  //   console.log(city)
  // });

  return (
    <aside className="sideBar">
      <SidebarSpinner
        sidebarLoading={currentWeather.sidebarLoading}
      />
      <h3>Recently Searched Cities</h3>
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
              className="sidebarItem">
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
