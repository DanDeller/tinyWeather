import React from 'react';
import style from '../../assets/styles/style.less';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem.js';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Sidebar extends React.Component {
  deleteCity = (e) => {
    this.props.dispatch(actions.deleteRecentCities('70745-8426-abda-e421-301acfd04f87'));
  }

  render() {
    const getRecentCities = this.props.recentCities.map((city, i) => (
      <SidebarItem 
        key={i} 
        recentCity={city} 
        deleteCity={this.deleteCity}
      />
    ));
  
    return (
      <aside className={style.sideBar}>
        <h3>Recently Searched Cities</h3>
        <ul>
          {getRecentCities}
        </ul>
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

Sidebar.propTypes = {
  recentCities: PropTypes.array
};

export default connect(mapDispatchToProps)(Sidebar);
