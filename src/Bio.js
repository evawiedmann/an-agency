import React from 'react';

function Bio(){
  return (
    <div className='bioClass'>

      <h2 className='bioHeader'>About Us</h2>
      <p className='bioText'>Who are we? Well, we seek out the finest natural and organic foods available, maintain the strictest quality standards in the industry, and have an unshakeable commitment to sustainable agriculture. Add to that the excitement and fun we bring to shopping for groceries, and you start to get a sense of what we’re all about. Oh yeah, we’re a mission-driven company too.</p>
      <style jsx>{`
      .bioClass {
        position: absolute;
        left: 25%;
        top: 15vh;
        width: 50%;
        background-color: rgba(166, 250, 118, .3);
        border-radius: 25px;
        height: 1000px;
        overflow: auto;


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
