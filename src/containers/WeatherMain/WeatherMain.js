import WeatherVideo from '../../components/weather-video/WeatherVideo';
import WeatherForm from '../../components/weather-form/WeatherForm';
import WeatherList from '../../components/weather/WeatherList';
import * as actions from '../../redux/actions/currentWeather';
import Sidebar from '../../components/sidebar/Sidebar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WeatherMain.scss';
import React from 'react';

class WeatherMain extends React.Component {
  componentDidMount = () => {
    if (!this.props.recentCities.length) {
      this.props.dispatch(actions.fetchRecentCities(this.props.token, this.props.userId));
    }
  };

  render() {
    return (
      <section className="container">
        <div className="weatherMain bodyText">
          <h1 className="pageHeader">Search a city to check the weather</h1>
          <div className="hold">
            <div className="weatherLeft">
              <WeatherVideo 
                setVideo={this.props.setVideo}  
              />
              <WeatherForm
                updateInputValue={this.updateInputValue}
                resetSearch={this.resetSearch}
                isOpen={this.props.isOpen}
                city={this.props.city}
              />
              <WeatherList
                cityDetails={this.props.cityDetails}
                isOpen={this.props.isOpen}
              />
            </div>
            <div className="weatherRight">
              <Sidebar
                recentCities={this.props.recentCities}
                visible={this.props.visible}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    recentCities: state.currentWeather.recentCities,
    cityDetails: state.currentWeather.cityDetails,
    setVideo: state.currentWeather.setVideo,
    visible: state.currentWeather.visible,
    userId: state.isAuthenticated.userId,
    token: state.isAuthenticated.tokenId,
    isOpen: state.currentWeather.isOpen,
    city: state.currentWeather.setCity,
    days: state.fiveDayForecast.days
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

WeatherMain.propTypes = {
  weatherLoading: PropTypes.bool,
  recentCities: PropTypes.array,
  cityDetails: PropTypes.array,
  setVideo: PropTypes.string,
  fetchFlag: PropTypes.bool,
  dispatch: PropTypes.func,
  visible: PropTypes.bool,
  isOpen: PropTypes.bool,
  city: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherMain);