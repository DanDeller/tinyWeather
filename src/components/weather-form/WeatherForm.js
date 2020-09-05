import * as fetchFlagAction from '../../redux/actions/fiveDayForecast';
import * as actions from '../../redux/actions/currentWeather';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WeatherForm.scss';
import React from 'react';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {myRefs: ''};
    this.city = React.createRef();
    this.getWeather = this.getWeather.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  };

  updateInputValue = (e) => {
    this.props.dispatch(actions.setCity(e.target.value));
  };

  getWeather = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.getWeather(this.props.city, this.props.userId));
  };

  resetSearch = () => {
    const ref = this.city;
    ref.value = '';
    this.props.dispatch(actions.isOpen(true));
    this.props.dispatch(actions.setVideo(''));
    this.props.dispatch(actions.setCity(''));
    this.props.dispatch(fetchFlagAction.setFetchFlag(!!this.props.fetchFlag));
  };

  render() {
    return (
      <div className="weatherForm"> 
        <div className={`${(this.props.isOpen ? 'show' : 'hide')}`}>
          <form action='/' method='GET'>
            <input
              ref={el => this.city = el}
              onChange={this.updateInputValue}
              type='text'
              name='test'
              placeholder='Search city'
              className="searchMain"
            />
            <input
              onClick={e => this.getWeather(e)}
              type='submit'
              value='Search'
              className='search-city'
            />
          </form>
        </div>
        <div className={`resetButton ${(this.props.isOpen ? 'hide' : 'show')}`}>
          <p>Seach another city?</p>
          <button
            onClick={this.resetSearch}>Search
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    fetchFlag: state.fiveDayForecast.fetchFlag
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

WeatherForm.propTypes = {
  updateInputValue: PropTypes.func,
  passRefUpward: PropTypes.func,
  resetSearch: PropTypes.func,
  getWeather: PropTypes.func,
  isOpen: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForm);