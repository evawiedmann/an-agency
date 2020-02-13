import React from 'react';
import './App.css';

import MarketLocation from './MarketLocation';



const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function MarketSchedule(){
  return (
    <div className="marketClass">
      <h2 className="marketScheduleHeader"> Market Schedule </h2>
      {marketSchedule.map((place, index) =>
        <MarketLocation day={place.day}
          location={place.location}
          hours={place.hours}
          booth={place.booth}
          key={index}/>
      )}
      <style jsx>{`

    .marketClass {

      background-color: rgba(166, 250, 118, .3);
      border-radius: 25px;
      overflow: auto;
      animation: div_animation_effect 2s 1;
    }

    @keyframes div_animation_effect {
            0%   { opacity: 0;  left:2000px}
            40%   { opacity: 1; left:1%}
            100% { opacity: 1;}
    }

    .marketScheduleHeader{
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid lightgrey;
    }
    `}</style>

    </div>
  );
}

export default MarketSchedule;
