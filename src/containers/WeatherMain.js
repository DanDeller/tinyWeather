import React from 'react';
import style from '../assets/styles/style.less';
import WeatherForm from '../components/weather-form/WeatherForm';
import WeatherList from '../components/weather/WeatherList';
import Sidebar from '../components/sidebar/Sidebar';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import WeatherIcons from '../components/weather/WeatherIcons';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as actions from '../redux/actions';
import { Rain, Clear, Clouds, ThunderLightning, Haze, Snow } from '../assets/videos/vid-exports';
import ErrorModal from '../components/modal/Modal';
import WeatherVideo from '../components/weather-video/WeatherVideo';

class WeatherMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {myRefs: ''};

    this.updateInputValue = this.updateInputValue.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);
  } 

  componentDidMount() {
    this.props.dispatch(actions.fetchRecentCities());
  } // end componentDidMount()

  updateInputValue = (e) => {
    this.props.dispatch(actions.setCity(e.target.value));
  } // end updateInputValue()

  resetSearch = () => {
    const refs = {...this.state.myRefs};
    refs.current.value = '';
    this.props.dispatch(actions.isOpen(true));
    this.props.dispatch(actions.setVideo(''));
    this.props.dispatch(actions.setCity(''));
  } // end resetSearch()

  closeModal = (e) => {
    e.preventDefault();
    const refs = {...this.state.myRefs};
    refs.current.value = '';
    this.props.dispatch(actions.visible(false));
    this.props.dispatch(actions.setCity(''));
  } // end closeModal()

  getWeather = (e) => {
    e.preventDefault();

    if (!this.props.city) {
       this.props.dispatch(actions.visible(true));
    } else {
      const city = this.props.city;

      axios.get(`/weather?q=${city}&APPID=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`)
      .then(res => {
        if (res) {
          let video = '';
          const details = {
            name: res.data.name,
            weather: res.data.weather[0].main.toLowerCase(),
            temp: parseInt(res.data.main.temp)
          };

          switch(details.weather) {
            case 'clouds':
              video = {Clouds};
              break;
            case 'clear':
              video = {Clear};
              break;
            case 'drizzle':
            case 'rain':
              video = {Rain};
              break;
            case 'haze': 
            case 'mist':
              video = {Haze};
              break;
            case 'thunderstorm':
              video = {ThunderLightning};
              break;
            case 'snow':
              video = {Snow};
          }
          
          this.props.dispatch(actions.postRecentCities(city, uuid()));
          this.props.dispatch(actions.setDetails(details));
          this.props.dispatch(actions.isOpen(false));
          this.props.dispatch(actions.setVideo(Object.values(video)[0]));
        }
      })
      .catch(() => this.props.dispatch(actions.visible(true)));
    } // end if/else (!this.props.city)
  } // end getWeather()

  getRefsFromChild = (childRefs) => {
    this.setState({
      myRefs: childRefs
    });
  } // end getRefsFromChild()

  render() {
    return (
      <section className={style.container}>
        <ErrorModal 
          visible={this.props.visible} 
          closeModal={this.closeModal} 
        />
        <div className={`${style.weatherMain} ${style.bodyText}`}>
          <h1 className={style.pageHeader}>Search a city to check the weather</h1>
          <div className={style.hold}>
            <div className={style.weatherLeft}>
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
            <div className={style.weatherRight}>
              <Sidebar
                recentCities={this.props.recentCities}
                visible={this.props.visible}
              />
            </div>
          </div>
        </div>
        <WeatherIcons animate={false} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.currentWeather.setCity,
    setVideo: state.currentWeather.setVideo,
    recentCities: state.currentWeather.recentCities,
    cityDetails: state.currentWeather.cityDetails,
    isOpen: state.currentWeather.isOpen,
    visible: state.currentWeather.visible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

WeatherMain.propTypes = {
  'recentCities': PropTypes.array,
  'cityDetails': PropTypes.array,
  'setVideo': PropTypes.string,
  'dispatch': PropTypes.func,
  'visible': PropTypes.bool,
  'isOpen': PropTypes.bool,
  'city': PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherMain);