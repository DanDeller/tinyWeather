import WeatherIcons from '../components/weather/WeatherIcons';
import * as actions from '../redux/actions/fiveDayForecast';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import React from 'react';
import 'moment-timezone';

class FiveDayForecast extends React.Component {
  getForecast = () => {
    const city = this.props.city;
    this.props.dispatch(actions.fetchDays(city));
  }

  componentDidMount = () => {
    this.getForecast();
  }

  render() {
    const forgotCityInline = !this.props.city.length ? 'show' : 'hide';
    const days = this.props.days.map((day, i) => (
      <div className={`day ${this.props.city.length === 0 ? 'hide' : 'show'}`} key={i}>
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
      <section className="container">
        <div className="weatherMain bodyText">
          <h1 className="pageHeader">Forecast for the next five days</h1>
          <div className="dayHold">
            <h3 className={`hide forgotCity ${forgotCityInline}`}>Go lookup a city first!</h3>
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