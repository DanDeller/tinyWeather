import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom'

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      details: [],
      myRefs: ''
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      city: e.target.value
    });
  }

  getWeather(e) {
    e.preventDefault();

    if (!this.state.city.length) {
      alert('Enter a city.');
    } else {
      let city = this.state.city,
          box  = this.state.myRefs.city;

      fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6d5233c17d482d1c20dabfc48d8b3112', {
        headers: {
          Accept: 'application/json',
        },
      }).then(results => {
        return results.json();
      }).then((data) => {
        this.state.details.push({
          name: data.name,
          weather: data.weather[0].main
        });
        this.setState({
          city: city
        });

        box.value = '';
        this.state.city = '';
        
      });
    }
  }

  getRefsFromChild(childRefs) {
    this.setState({
      myRefs: childRefs
    });
    // console.log('here! -> ' + this.state.myRefs);
  }

  render() {
    return (
      <div className={style.container + ' ' + style.bodyText}>
        <WeatherForm
          updateInputValue={this.updateInputValue}
          getWeather={this.getWeather}
          passRefUpward={this.getRefsFromChild}
        />
        <WeatherList
          details={this.state.details}
        />
      </div>
    );
  }
}


class WeatherForm extends React.Component {
  componentDidMount() {
    this.props.passRefUpward(this.refs);
  }

  render() {
    return (
      <div className={style.weatherForm}>
        <form action='/' method='GET'>
          <input ref={'city'} onChange={this.props.updateInputValue} type='text' placeholder='Search city' />
          <input onClick={e => this.props.getWeather(e)} type='submit' value='Search' /> 
        </form>
      </div>
    );
  }
}


class WeatherList extends React.Component {
  render() {
    const city = this.props.details.map((item, i) => (
      <div className={style.weatherItem} key={i}>
        <p>{item.name}</p>
        <p>{item.weather}</p>
      </div>
    ));

    return (
      <div className={style.weatherItems}>
        {city}
      </div>
    );
  }
}


export default Weather;