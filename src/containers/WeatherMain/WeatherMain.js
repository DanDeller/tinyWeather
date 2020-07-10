import WeatherLookupSpinner from '../../components/spinner/WeatherLookupSpinner';
import WeatherVideo from '../../components/weather-video/WeatherVideo';
import WeatherForm from '../../components/weather-form/WeatherForm';
import WeatherIcons from '../../components/weather/WeatherIcons';
import WeatherList from '../../components/weather/WeatherList';
import * as actions from '../../redux/actions/currentWeather';
import Sidebar from '../../components/sidebar/Sidebar';
import ErrorModal from '../../components/modal/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WeatherMain.scss';
import React from 'react';

class WeatherMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {myRefs: ''};
    this.updateInputValue = this.updateInputValue.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);
  };

  componentDidMount = () => {
    if (!this.props.recentCities.length) {
      this.props.dispatch(actions.fetchRecentCities(this.props.token, this.props.userId));
    }
  };

  updateInputValue = (e) => {
    this.props.dispatch(actions.setCity(e.target.value));
  };

  resetSearch = () => {
    const refs = {...this.state.myRefs};
    refs.current.value = '';
    this.props.dispatch(actions.isOpen(true));
    this.props.dispatch(actions.setVideo(''));
    this.props.dispatch(actions.setCity(''));
  };

  closeModal = (e) => {
    e.preventDefault();
    const refs = {...this.state.myRefs};
    refs.current.value = '';
    this.props.dispatch(actions.visible(false));
    this.props.dispatch(actions.setCity(''));
    this.props.dispatch(actions.fetchWeatherSuccess());
  };

  getWeather = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.getWeather(this.props.city, this.props.userId));
  };

  getRefsFromChild = (childRefs) => {
    this.setState({
      myRefs: childRefs
    });
  };

  render() {
    return (
      <section className="container">
        <WeatherLookupSpinner 
          weatherLoading={this.props.weatherLoading}
        />
        <ErrorModal 
          visible={this.props.visible} 
          closeModal={this.closeModal} 
        />
        <div className="weatherMain bodyText">
          <h1 className="pageHeader">Search a city to check the weather</h1>
          <div className="hold">
            <div className="weatherLeft">
              <WeatherVideo 
                setVideo={this.props.setVideo}  
              />
              <WeatherForm
                updateInputValue={this.updateInputValue}
                getWeather={this.getWeather}
                passRefUpward={this.getRefsFromChild}
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
        <WeatherIcons 
          animate={false} 
        />
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    weatherLoading: state.currentWeather.weatherLoading,
    recentCities: state.currentWeather.recentCities,
    cityDetails: state.currentWeather.cityDetails,
    setVideo: state.currentWeather.setVideo,
    visible: state.currentWeather.visible,
    userId: state.isAuthenticated.userId,
    isOpen: state.currentWeather.isOpen,
    token: state.isAuthenticated.tokenId,
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
  dispatch: PropTypes.func,
  visible: PropTypes.bool,
  isOpen: PropTypes.bool,
  city: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherMain);