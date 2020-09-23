import * as actions from '../../redux/actions/fiveDayForecast';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './FiveDayForecast.scss';
import React, { useEffect } from 'react';
import 'moment-timezone';

const FiveDayForecast = () => {

  const currentWeather = useSelector(state => state.currentWeather);
  const fiveDayForecast = useSelector(state => state.fiveDayForecast);
  const dispatch = useDispatch();
  
  const getForecast = () => {
    const fetchFlag = currentWeather.fetchFlag,
          city      = currentWeather.setCity;

    if (currentWeather.setCity.length && !fetchFlag) {
      dispatch(actions.fetchDays(city));
      dispatch(actions.setFetchFlag(!!fiveDayForecast.fetchFlag));
    }
  };

  useEffect(() => {
    getForecast();
  }, []);

  console.log(currentWeather)
  const forgotCityInline = !currentWeather.setCity.length ? 'show' : 'hide';

  const days = fiveDayForecast.days.map((day, i) => (
    <div className={`day ${currentWeather.setCity.length === 0 ? 'hide' : 'show'}`} key={i}>
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
    </section>
  );
};

// class FiveDayForecast extends React.Component {
//   getForecast = () => {
//     const fetchFlag = this.props.fetchFlag,
//           city      = this.props.city;

//     if (city.length && !fetchFlag) {
//       this.props.dispatch(actions.fetchDays(city));
//       this.props.dispatch(actions.setFetchFlag(!!this.props.fetchFlag));
//     }
//   };

//   componentDidMount = () => {
//     this.getForecast();
//   };

//   render() {
//     const forgotCityInline = !this.props.city.length ? 'show' : 'hide';
//     const days = this.props.days.map((day, i) => (
//       <div className={`day ${this.props.city.length === 0 ? 'hide' : 'show'}`} key={i}>
//         <p>
//           <Moment format="dddd">
//             {day.dt_txt.split(' ')[0]}
//           </Moment>
//           <span>{day.dt_txt.split(' ')[0]}</span>  
//         </p>
//         <p>{day.main.temp.toFixed(0)}</p>
//         <p>{`${day.weather[0].description[0].toUpperCase()}${day.weather[0].description.slice(1)}`}</p>
//       </div>
//     ));

//     return (
//       <section className="container">
//         <div className="weatherMain bodyText">
//           <h1 className="pageHeader">Forecast for the next five days</h1>
//           <div className="dayHold">
//             <h3 className={`hide forgotCity ${forgotCityInline}`}>Go lookup a city first!</h3>
//             {days}
//           </div>
//         </div>
//       </section>
//     );
//   }
// };

const mapStateToProps = state => {
  return {
    fetchFlag: state.fiveDayForecast.fetchFlag,
    city: state.currentWeather.setCity,
    days: state.fiveDayForecast.days
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

FiveDayForecast.propTypes = {
  fetchFlag: PropTypes.bool,
  dispatch: PropTypes.func,
  city: PropTypes.string,
  days: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiveDayForecast);