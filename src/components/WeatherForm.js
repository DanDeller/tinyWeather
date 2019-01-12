import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';

class WeatherForm extends React.Component {
  componentDidMount() {
    this.props.passRefUpward(this.refs);
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div className={style.weatherForm}>
          <form action='/' method='GET'>
            <input 
              className={style.test}
              ref={'city'} 
              onChange={this.props.updateInputValue} 
              type='text' 
              placeholder='Search city' 
            />
            <input 
              onClick={e => this.props.getWeather(e)} 
              type='submit' 
              value='Search' 
            /> 
          </form>
        </div>
      )
    } else {
      return (
        <div className={style.resetButton}>
          <p>Seach another city?</p>
          <button 
            onClick={this.props.resetSearch}>Search
          </button>
        </div>
      );
    }
  }
}

export default WeatherForm;