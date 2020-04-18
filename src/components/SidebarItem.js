import React from 'react';
import style from '../assets/styles/style.less';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

export default SidebarItem;