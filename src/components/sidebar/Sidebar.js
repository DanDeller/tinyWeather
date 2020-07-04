import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SidebarSpinner from '../spinner/SidebarSpinner';
import SidebarItem from './SidebarItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sideBar">
        <SidebarSpinner
          sidebarLoading={this.props.sidebarLoading}
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
};

const matchStateToProps = state => {
  return {
    sidebarLoading: state.currentWeather.sidebarLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

Sidebar.propTypes = {
  recentCities: PropTypes.array
};

export default connect(
  matchStateToProps, 
  mapDispatchToProps)
(Sidebar);
