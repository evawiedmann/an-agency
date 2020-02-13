import React from 'react';
import { Link } from 'react-router-dom';





function Header(){

  let imageArray = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg', 'https://en.muddyboots.com/js/tinymce/jscripts/tiny_mce/plugins/imagemanager/files/fresh-produce_aus.jpg', 'https://keanyproduce.com/wp-content/uploads/2016/10/hero-press-inquiries.jpg', 'https://www.chewboom.com/wp-content/uploads/2019/12/New-Nachos-Party-Pack-Coming-To-Taco-Bell-On-December-26-2019-678x381.jpg'];

  let imageNumber = (Math.round(Math.random()*3));

  return (

    <div className="">
      <h1 className="mainH1">An Agency</h1>
      <h3 className="mainH3"><Link to="/">Home</Link> | <Link to="/AboutUs">About Us</Link></h3>
      <div className="mainHeader">

        <style jsx>{`
      .mainHeader {
        z-index: 0;
        background-image: url(${imageArray[imageNumber]});
        // opacity: 1;
        // transition: opacity 1000ms;
        // border-radius: 25px;
        border-bottom-left-radius:  25%;
        border-bottom-right-radius: 25%;
        height: 15vh;
        background-size: cover;
        margin-top: -7px;
        animation: header_fade_effect 60s infinite;
      }

      @keyframes header_fade_effect {
        0%   { opacity: 0; }
        5%   { opacity: 1; }
        100% { opacity: 1; }
      }

      .mainH1 {
        z-index: 1;
        color: blue;
        position: absolute;
        top: 0px;
        left: 20px;
        background: rgba(255, 255, 255, .5);
        padding: 15px;
        border-radius: 25px;
      }
      .mainH3 {
        z-index: 1;
        color: blue;
        position: absolute;
        top: 80px;
        left: 20px;
        background: rgba(255, 255, 255, .5);
        padding: 15px;
        border-radius: 25px;
      }

      `}</style>
      </div>
    </div>

  );
}



export default Header;
