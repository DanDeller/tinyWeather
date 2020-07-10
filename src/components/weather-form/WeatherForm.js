import PropTypes from 'prop-types';
import './WeatherForm.scss';
import React from 'react';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.city = React.createRef();
  };

  componentDidMount() {
    this.props.passRefUpward(this.city);
  };

  render() {
    return (
      <div className="weatherForm"> 
        <div className={`${(this.props.isOpen ? 'show' : 'hide')}`}>
          <form action='/' method='GET'>
            <input
              ref={this.city}
              onChange={this.props.updateInputValue}
              type='text'
              name='test'
              placeholder='Search city'
              className="searchMain"
            />
            <input
              onClick={e => this.props.getWeather(e)}
              type='submit'
              value='Search'
              className='search-city'
            />
          </form>
        </div>
        <div className={`resetButton ${(this.props.isOpen ? 'hide' : 'show')}`}>
          <p>Seach another city?</p>
          <button
            onClick={this.props.resetSearch}>Search
          </button>
        </div>
      </div>
    );
  }
};

WeatherForm.propTypes = {
  updateInputValue: PropTypes.func,
  passRefUpward: PropTypes.func,
  resetSearch: PropTypes.func,
  getWeather: PropTypes.func,
  isOpen: PropTypes.bool
};

export default WeatherForm;