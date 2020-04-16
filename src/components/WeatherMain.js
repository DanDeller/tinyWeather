import React from 'react';
import style from '../assets/styles/style.less';
import WeatherForm from './WeatherForm';
import WeatherList from './WeatherList';
import Sidebar from './Sidebar';
import Modal from 'react-awesome-modal';
import Rain from '../assets/videos/rain.mp4';
import Clear from '../assets/videos/sunny.mp4';
import Clouds from '../assets/videos/cloudy.mp4';
import ThunderLightning from '../assets/videos/thunder-lightning.mp4';
import Haze from '../assets/videos/haze.mp4';
import Snow from '../assets/videos/snow.mp4';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import fetchProductsAction from '../redux/actions/fetchProducts';
import { 
  setCity, 
  recentCity, 
  setDetails, 
  setVideo, 
  isOpen, 
  visible 
} from '../redux/actions';

class WeatherMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {myRefs: ''};

    this.updateInputValue = this.updateInputValue.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);
  } 

  // testing react-thunk sample
  // - pulls in data from /currentWeather
  componentDidMount() {
    this.props.dispatch(fetchProductsAction());
  }

  updateInputValue = (e) => {
    this.props.dispatch(setCity(e.target.value));
  } // end updateInputValue()

  resetSearch = () => {
    this.state.myRefs.current.value = '';
    this.props.dispatch(isOpen(true));
    this.props.dispatch(setVideo(''));
    this.props.dispatch(setCity(''));
  } // end resetSearch()

  closeModal = (e) => {
    e.preventDefault();
    this.state.myRefs.current.value = '';
    this.props.dispatch(visible(false));
    this.props.dispatch(setCity(''));
  } // end closeModal()

  getWeather = (e) => {
    e.preventDefault();

    if (!this.props.city) {
       this.props.dispatch(visible(true));
    } else {
      const city = this.props.city;

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6d5233c17d482d1c20dabfc48d8b3112&units=imperial`, {
        headers: {
          Accept: 'application/json',
        }
      }).then((results) => {
        if (results.status === 404) {
          this.props.dispatch(visible(true));
          return;
        } else {
          return results.json();
        }
      }).then((data) => {
        if (data) {
          let video = '';
          const details = {
            name: data.name,
            weather: data.weather[0].main.toLowerCase(),
            temp: parseInt(data.main.temp)
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

          this.props.dispatch(recentCity(city, uuid()));
          this.props.dispatch(setDetails(details));
          this.props.dispatch(isOpen(false));
          this.props.dispatch(setVideo(Object.values(video)[0]));
        }
      }); // end fetch()
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
        <Modal
          visible={this.props.visible}
          width="400"
          height="300"
          effect="fadeInUp"
        >
          <div className={style.modal}>
            <h2>We either cannot find that city or you forgot to enter a city first.</h2>
            <a href="#" onClick={this.closeModal}>Search Again?</a>
          </div>
        </Modal>
        <div className={style.weatherMain + ' ' + style.bodyText}>
          <h2 className={style.pageHeader}>Search a city to check the weather</h2>
          <div className={style.hold}>
            <div className={style.weatherLeft}>
              <video key={this.props.setVideo} className={style.video} loop autoPlay muted>
                <source src={this.props.setVideo} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
              <div className={style.weatherAbove}>
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
            </div>
            <div className={style.weatherRight}>
              <Sidebar
                recentCities={this.props.recentCities}
              />
            </div>
            <div className={style.clear}></div>
          </div>
        </div>
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
    visible: state.currentWeather.visible,
    error: state.currentWeather.error,
    products: state.currentWeather.products,
    pending: state.currentWeather.pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherMain);