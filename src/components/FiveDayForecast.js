import React from 'react';
import style from '../assets/styles/style.less';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FiveDayForecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {days: []};
  }

  getForecast = () => {
    const city = this.props.city;

    if (this.props.city.length) {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`, {
        headers: {
          Accept: 'application/json',
        },
      }).then((results) => {
        return results.json();
      }).then((data) => {
        const newData = [],
              set     = data;

        if (set.list) {
          set.list.map((o) => {
            const date = o.dt_txt.split(' ')[1];
            
            /*
            * Days are returned in 3 hour increments
            * Grab objects that match '15:00:00' 
            */
            if (date === '15:00:00') {
              newData.push(o);
            }

            return newData.splice(5);
          });

          this.setState({days: newData});
        }
      });
    }
  }

  componentDidMount = () => {
    this.getForecast();
  }

  render() {
    const forgotCity = !this.props.city.length ? style.show : '';
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
          <h2 className={style.pageHeader}>Forecast for the next five days</h2>
          <div className={style.dayHold}>
            <h3 className={style.hide + ' ' + style.forgotCity + ' ' + forgotCity}>Go lookup a city first!</h3>
            {days}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.currentWeather.setCity
  }
}

FiveDayForecast.propTypes = {
  city: PropTypes.string
};

export default connect(mapStateToProps)(FiveDayForecast);