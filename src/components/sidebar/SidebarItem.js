import React from 'react';
import style from '../../assets/styles/style.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/currentWeather';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toggleDelete: false};
    this.toggle = this.toggle.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
  }

  toggle = () => {
    this.setState({
      toggleDelete: !this.state.toggleDelete
    })
  }

  deleteCity = () => {
    this.props.dispatch(actions.deleteRecentCities(this.props.id));
  }

  render() {
    const city = this.props.recentCity;

    return (
      <li
        className={style.sidebarItem}
        onClick={this.toggle}
        id={this.props.id}  
      >
        <p
          style={{
            transform: !this.state.toggleDelete ? 'translateY(0)' : 'translateX(-5vh)',
            opacity: !this.state.toggleDelete ? '1' : '.4'
          }}>
          {city.city}
        </p>
        <button
          onClick={this.deleteCity}
          style={{
            display: this.state.toggleDelete ? 'flex' : 'none'
          }}>Remove
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

SidebarItem.propTypes = {
  id: PropTypes.string,
  city: PropTypes.object,
  recentCity: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(mapDispatchToProps)(SidebarItem);