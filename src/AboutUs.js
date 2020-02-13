import React from 'react';
import './App.css';
import BioPic from './BioPic';



function AboutUs(){

  function mouseIn() {
    // let idOfThing = document.getElementById('1');
    // let idOfThing = document.getElementsByClassName('bioLI').id;
    // let idOfThing = document.getElementsByTagName('li');
    let idOfThing = document.querySelector('li.bioLI');


    // let idOfThing = target.id
    console.log(idOfThing);
    document.getElementById('0').style.color = "red";

  }

  function mouseOut() {
    document.getElementById('0').style.color = "black";
  }

  return (
    <div className='aboutClass'>
      <h2 className='aboutHeader'>About Us</h2>
      <p className='aboutText'>Who are we? Well, we seek out the finest natural and organic foods available, maintain the strictest quality standards in the industry, and have an unshakeable commitment to sustainable agriculture. Add to that the excitement and fun we bring to shopping for groceries, and you start to get a sense of what we’re all about. Oh yeah, we’re a mission-driven company too.</p>

<div className='bioLinks'>
<ul>
<li className='bioLI' id='0' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>Gary</li>
<li className='bioLI' id='1' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>Muggy</li>
<li className='bioLI' id='2' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>Uncanny</li>




</ul>
</div>

      <div className='bioPic'>
      <BioPic/>
      </div>
      <style jsx>{`

        .bioLinks {
          float: right;
        }

      .aboutClass {
        background-color: rgba(166, 250, 118, .3);
        border-radius: 25px;
        overflow: auto;
        animation: div_animation_effect 2s 1;
      }

      .bioPic {
        width: 50%;
        border-radius: 100%;
        overflow: hidden;
        height: 50%;
      }

      @keyframes div_animation_effect {
              0%   { opacity: 0;  left:2000px}
              40%   { opacity: 1; left:1%}
              100% { opacity: 1;}
      }

      .aboutHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
      }

      .aboutText{
        text-align: center;
        color: #ab3333;
        padding: 20px;

      }

      `}</style>





    </div>
  );
}




export default AboutUs;
