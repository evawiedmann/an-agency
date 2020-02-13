import React from 'react';
import './App.css';
import Gary from './gary.jpg';
import Muggy from './muggy.jpg';
import Uncanny from './uncanny.jpg';

const pictures = [Gary, Muggy, Uncanny]
const index = 2

function BioPic(){
  return (
    <div className='BioPicClass'>
    <h2 className='BioPicName'>Gary</h2>
  
    <img  className='BioPicPicture'src={pictures[index]}/>


      <style jsx>{`
      .BioPicClass {
        background-color: rgba(166, 250, 118, .3);
        border-radius: 25px;
        overflow: auto;
        animation: div_animation_effect 2s 1;
      }
      .BioPicPicture {
        border-radius: 25px;
      }

      @keyframes div_animation_effect {
              0%   { opacity: 0;  left:2000px}
              40%   { opacity: 1; left:1%}
              100% { opacity: 1;}
      }

      .BioPicHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
      }



      `}</style>





    </div>
  );
}




export default BioPic;
