import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="container bodyText home">
      <h1 className="page-header">How the app works</h1>
      <div className="home-search">
        <div className="block">
          <h2>Search for a city</h2>
          <p>Head over to Current Weather Lookup to get started. Simply add a city to the input and hit the search button. 
            From there, city data will be gathered and displayed.</p>
          <p className="note">Note: When searching, the input only needs the city name. Example - Pittsburgh</p>
        </div>
      </div>

      <img className="arrow" src={require('../../assets/img/arrow.png')} alt='arrow' />

      <div className="home-search">
        <div className="block">
          <h2>Check out the local forecast for the next five days</h2>
          <p>Once your city info is returned, you can head over to the Five Day Lookup page. Temperature ranges are based off of 
            mid day projections. Weather data is supplied by <a href="https://openweathermap.org/api">Weather API</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;