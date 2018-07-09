import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';

// import all needed video clips
import Rain from '../../videos/rain.mp4';
import Clear from '../../videos/sunny.mp4';
import Clouds from '../../videos/cloudy.mp4';
import ThunderLightning from '../../videos/thunder-lightning.mp4';
import Haze from '../../videos/haze.mp4';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentCities: [],
      isOpen: true,
      details: [],
      myRefs: '',
      video: '',
      city: ''
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      city: e.target.value
    });
  }

  resetSearch() {
    this.setState({
      details: [],
      isOpen: !this.state.isOpen
    });
  }

  getWeather(e) {
    e.preventDefault();

    if (!this.state.city) {
      alert('Enter a city first.');
    } else {
      let city = this.state.city,
          box  = this.state.myRefs.city;

      fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=6d5233c17d482d1c20dabfc48d8b3112&units=imperial', {
        headers: {
          Accept: 'application/json',
        },
      }).then(results => {
        return results.json();
      }).then((data) => {

        this.state.details.push({
          name: data.name,
          weather: data.weather[0].main,
          temp: parseInt(data.main.temp)
        });

        const weather = this.state.details[0].weather.toLowerCase();

        if (weather === 'clouds') {
          this.state.video = {Clouds};
        } else if (weather === 'clear') {
          this.state.video = {Clear}
        } else if (weather === 'rain') {
          this.state.video = {Rain}
        } else if (weather === 'haze' || 'mist') {
          this.state.video = {Haze}
        } else if (weather === 'thunderstorm') {
          this.state.video = {ThunderLightning}
        }

        this.state.recentCities.push(city);

        this.setState({
          city: city,
          isOpen: false,
          video: Object.values(this.state.video)[0]
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
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.weatherMain + ' ' + style.bodyText}>
          <video key={this.state.video} className={style.video} loop autoPlay muted>
            <source src={this.state.video} type="video/mp4">
            </source>
            Your browser does not support the video tag.
          </video>

          <div className={style.hold}>
            <div className={style.weatherLeft}>
              <WeatherForm
                updateInputValue={this.updateInputValue}
                getWeather={this.getWeather}
                passRefUpward={this.getRefsFromChild}
                resetSearch={this.resetSearch}
                isOpen={this.state.isOpen}
              />
              <WeatherList
                details={this.state.details}
                city={this.state.city}
                isOpen={this.state.isOpen}
              />
            </div>
            <div className={style.weatherRight}>
              <Sidebar
                recentCities={this.state.recentCities}
              />
            </div>
            <div className={style.clear}></div>
          </div>
        </div>
      </div>
    );
  }
}


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


class WeatherList extends React.Component {
  render() {
    const city = this.props.details.map((item, i) => (
      <div className={style.weatherItem} key={i}>
        <h3>City: {item.name}</h3>
        <p>Current weather: {item.weather}</p>
        <p>Current temperature: {item.temp}</p>
      </div>
    ));

   const classes = !this.props.isOpen ? style.active : '';

    return (
      <div className={style.weatherItems + ' ' + classes}>
        {city}
      </div>
    );
  }
}


class Sidebar extends React.Component {
  render() {
    const getRecentCities = this.props.recentCities.map((city, i) => (
      <li key={i}>{city}</li>
    ));

    return (
      <div className={style.sideBar}>
        <h3>Recent Cities:</h3>
        <ul>
          {getRecentCities}
        </ul>
      </div>
    )
  }
}


export default Weather;