import React from 'react';
import PropTypes from 'prop-types';

function MarketLocation(props){
  return (
    <div className='locationBox'>

      <p className='locationText'>{props.day}</p>
      <p className='locationText'>{props.location}</p>
      <p className='locationText'>{props.hours}</p>
      <p className='locationText'>{props.booth}</p>


      <style jsx>{`
      .locationText {
        font-family: fantasy;
        line-height: 10px;
        color: red;
      }
      .locationBox{
        border-bottom: 1px solid lightgray;
        padding: 10px;
      }

      `}</style>
    </div>
  );
}

MarketLocation.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};


export default MarketLocation;
