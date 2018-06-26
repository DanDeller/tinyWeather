import React from 'react';
import style from '../styles/style.less';

class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: '',
      details: []
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      city: evt.target.value
    });
  }

  getWeather(e) {
    e.preventDefault();
    
    if (!this.state.city.length) {
      alert('Enter a city');
    } else {
      let city = this.state.city,
          box  = this.refs.city.value;

      fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6d5233c17d482d1c20dabfc48d8b3112', {
        headers: {
          Accept: 'application/json',
        },
      }).then(results => {
        return results.json();
      }).then((data) => {
        this.state.details.push({
          name: data.name
        });
        this.setState({
          box: city
        });
      });
    }
  }

  render() {
    const test = this.state.details.map((item, i) => (
      <div className={style.weatherItem} key={i}>{item.name}</div>
    ));

    return (
      <div className={style.container + ' ' + style.bodyText}>
        <div className={style.weatherForm}>
          <form action='/' method='GET'>
            <input ref='city' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} type='text' placeholder='Search city' />
            <input onClick={this.getWeather} type='submit' value='Search' /> 
          </form>
        </div>
        <div className={style.weatherItems}>{test}</div>
      </div>
    );
  }
}

export default Weather;