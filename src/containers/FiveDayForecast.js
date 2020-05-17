import React from 'react';
import style from '../assets/styles/style.less';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherIcons from '../components/weather/WeatherIcons';
import * as actions from '../redux/actions/fiveDayForecast';

class FiveDayForecast extends React.Component {
  getForecast = () => {
    const city = this.props.city;
    this.props.dispatch(actions.fetchDays(city));
  }

  componentDidMount = () => {
    this.getForecast();
  }

  render() {
    const forgotCity = !this.props.city.length ? style.show : '';
    const days = this.props.days.map((day, i) => (
      <div className={style.day} key={i}>
        <p>
          <Moment format="dddd">
            {day.dt_txt.split(' ')[0]}
          </Moment>
          <span>{day.dt_txt.split(' ')[0]}</span>  
        </p>
        <p>{day.main.temp.toFixed(0)}</p>
        <p>{`${day.weather[0].description[0].toUpperCase()}${day.weather[0].description.slice(1)}`}</p>
      </div>
    ));

    return (
      <section className={style.container}>
        <div className={`${style.weatherMain} ${style.bodyText}`}>
          <h1 className={style.pageHeader}>Forecast for the next five days</h1>
          <div className={style.dayHold}>
            <h3 className={`${style.hide} ${style.forgotCity} ${forgotCity}`}>Go lookup a city first!</h3>
            {days}
          </div>
        </div>
        <WeatherIcons 
          animate={false}
        />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    days: state.fiveDayForecast.days,
    city: state.currentWeather.setCity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

FiveDayForecast.propTypes = {
  city: PropTypes.string,
  days: PropTypes.array,
  dispatch: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiveDayForecast);