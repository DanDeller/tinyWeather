import React from 'react';
import style from '../styles/style.less';

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
    setTimeout(() => {
      this.getForecast();
    }, 500);
  }

  render() {
    const days = this.state.days.map((day) => {
      console.log(day);
    })

    return (
      <section className={style.container}>
        <div className={style.fiveDay + ' ' + style.bodyText}>
        </div>
      </section>
    );
  }
}

export default FiveDayForecast;