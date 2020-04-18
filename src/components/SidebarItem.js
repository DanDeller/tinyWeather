import React from 'react';
import PropTypes from 'prop-types';

class SidebarItem extends React.Component {
  constructor() {
    super();
    this.state = {completed: false};
  }

  toggle() {
    this.setState({completed: !this.state.completed });
  }

  render() {
    const city = this.props.city;
    return (
      <li className={this.state.completed ? 1 : 0} onClick={this.toggle.bind(this)}>{city.recentCity}</li>
    );
  }
}

SidebarItem.propTypes = {
  city: PropTypes.object
};

export default SidebarItem;