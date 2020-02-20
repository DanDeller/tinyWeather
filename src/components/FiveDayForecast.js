import React from 'react';
import style from '../styles/style.less';
import Moment from 'react-moment';
import 'moment-timezone';

class FiveDayForecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fiveDayCity: 'pittsburgh', // set temp city for testing 
      days: []
    };
  }

  getForecast = () => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.fiveDayCity + '&appid=6d5233c17d482d1c20dabfc48d8b3112&units=imperial', {
      headers: {
        Accept: 'application/json',
      },
    }).then(results => {
      return results.json();
    }).then((data) => {
      const newData = [],
            set     = data;
            
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
  }

  render() {
    const days = this.state.days.map((day, i) => (
      <div className={style.day} key={i}>
        <p>
          <Moment format="dddd">
            {day.dt_txt.split(' ')[0]}
          </Moment>
        </p>
      </div>
    ))

    return (
      <section className={style.container}>
        <div className={style.dayHold + ' ' + style.bodyText}>
          {days}
        </div>
      </section>
    );
  }
}

export default FiveDayForecast;