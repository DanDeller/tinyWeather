import React from 'react';
import style from '../styles/style.less';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentCities: [],
      isOpen: true,
      details: [],
      myRefs: '',
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

        this.state.recentCities.push(city);

        this.setState({
          city: city,
          isOpen: false
        });

        box.value = '';
        this.state.city = '';

        console.log(data);
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
      <div>
        <video className={style.video} loop autoPlay muted>
          <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4">
          </source>
          Your browser does not support the video tag.
        </video>

        <div className={style.container + ' ' + style.bodyText}>
          <div className={style.weatherMain}>
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
        <h3>{item.name}</h3>
        <p>{item.weather}</p>
        <p>{item.temp}</p>
      </div>
    ));

    return (
      <div className={style.weatherItems}>
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