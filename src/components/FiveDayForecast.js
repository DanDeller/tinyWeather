import React from 'react';
import style from '../styles/style.less';
import Moment from 'react-moment';
import 'moment-timezone';
import GoogleMapReact from 'google-map-react';

class FiveDayForecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fiveDayCity: 'pittsburgh', // set temp city for testing 
      days: []
    };
  }

  getCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } 

    function successFunction(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;

      console.log(`${lat} ${long}`);
    }
  }

  getForecast = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.fiveDayCity}&appid=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`, {
      headers: {
        Accept: 'application/json',
      },
    }).then((results) => {
      return results.json();
    }).then((data) => {
      const newData = [],
            set     = data;
      
      /*
      * NOTE: Openweathermap returns 40 objects. Each day is broken up into 3 hour chunks.
      * Map over the response and remove duplicate items and just use the first
      * entry starting at 00:00:00
      */
      set.list.map((o) => {
        const dup = newData.find((f) => {
          const splitO = o.dt_txt.split(' ')[0],
                splitF = f.dt_txt.split(' ')[0];
          
          return splitO === splitF;
        });
        
        if (!dup) {
          newData.push(o)
        };
        
        return newData.splice(5);
      });

      this.setState({
        days: newData
      });
    });
  }

  componentDidMount = () => {
    this.getForecast();
    // this.getCity();
  }

  render() {
    const days = this.state.days.map((day, i) => (
      <div className={style.day} key={i}>
        <p>
          <Moment format="dddd">
            {day.dt_txt.split(' ')[0]}
          </Moment>
          <span>{day.dt_txt.split(' ')[0]}</span>  
        </p>
        <p>{day.main.temp.toFixed(0)}</p>
        <p>{day.weather[0].description[0].toUpperCase() + day.weather[0].description.substring(1)}</p>
      </div>
    ))

    return (
      <section className={style.container}>
        <div className={style.weatherMain + ' ' + style.bodyText}>
          <h1 className={style.pageHeader}>Forecast for the next five days</h1>
            <div className={style.dayHold}>
              {days}
          </div>
        </div>
      </section>
    );
  }
}

export default FiveDayForecast;