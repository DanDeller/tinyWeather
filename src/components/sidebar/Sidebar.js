import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sideBar">
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
            {this.props.recentCities.map((city, i) => (
              <li 
                key={i}
                className="sidebarItem"
                onClick={this.toggle}
                id={this.props.id}>
                  <SidebarItem 
                    key={i}
                    id={city.id}
                    recentCity={city} 
                  />
                </li>
              ))
            }
          </CSSTransitionGroup>
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  recentCities: PropTypes.array
};

export default Sidebar;
