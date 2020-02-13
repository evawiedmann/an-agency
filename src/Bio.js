import React from 'react';
import './App.css';



function Bio(){
  return (
    <div className='bioClass'>

      <h2 className='bioHeader'>About Us</h2>
      <p className='bioText'>Who are we? Well, we seek out the finest natural and organic foods available, maintain the strictest quality standards in the industry, and have an unshakeable commitment to sustainable agriculture. Add to that the excitement and fun we bring to shopping for groceries, and you start to get a sense of what we’re all about. Oh yeah, we’re a mission-driven company too.</p>
      <style jsx>{`
      .bioClass {
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

      .bioHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
      }

      .bioText{
        text-align: center;
        color: #ab3333;
        padding: 20px;

      }

      `}</style>





    </div>
  );
}




export default Bio;
