import React from 'react';
// import { Link } from 'react-router-dom';





function Footer(){

  let imageArray = ['(111, 222, 222, .5)', '(222, 111, 222, .5)', '(222, 222, 111, .5)', '(111, 222, 111, .5)'];

  let imageNumber = (Math.round(Math.random()*3));

  console.log(imageArray[imageNumber]);
  return (

    <div className="mainFooter">
      <h1 className="">Rainbow footer!</h1>

      <style jsx>{`
      .mainFooter {
        z-index: 9;
        background-color: rgba${imageArray[imageNumber]};
        border-radius: 25px;
        background-size: cover;

        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 62px;
        color: white;
        text-align: center;
      }



      `}</style>
    </div>

  );
}



export default Footer;
