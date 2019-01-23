import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.city = React.createRef();
  }

  componentDidMount() {
    this.props.passRefUpward(this.city);
    this.city.current.focus();
  }

  componentDidUpdate() { 
    this.city.current.focus();
  }

  render() {
    return (
      <div> 
        <div className={style.weatherForm + ' ' + (this.props.isOpen ? style.show : style.hide)}>
          <form action='/' method='GET'>
            <input
              ref={this.city}
              onChange={this.props.updateInputValue}
              type='text'
              placeholder='Search city'
              className={style.searchMain}
            />
            <input
              onClick={e => this.props.getWeather(e)}
              type='submit'
              value='Search'
              className='search-city'
            />
          </form>
        </div>
        <div className={style.resetButton + ' ' + (this.props.isOpen ? style.hide : style.show)}>
          <p>Seach another city?</p>
          <button
            onClick={this.props.resetSearch}>Search
          </button>
        </div>
      </div>
    );
  }
}

export default WeatherForm;