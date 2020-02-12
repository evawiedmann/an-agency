import React from 'react';
import PropTypes from 'prop-types';

function CropList(props){

  function hide(){
    let idOfThing = document.getElementById(props.month);

    var parentArray = document.querySelectorAll('.child');
    parentArray.forEach(element => element.classList.add('hidden'));

    let childArray = (idOfThing.querySelectorAll('.child'));
    childArray.forEach(element => element.classList.toggle('hidden'));
    console.log(childArray);
  }

  return (
    <div className='cropBox'>

      <ul className='parent' id={props.month} onClick={hide}><h3 className='cropText'>{props.month}</h3>

        {props.selection.map((crop, index) =>

          <li key={index} className='child hidden cropText'>{crop}</li>
        )}
      </ul>
      <style jsx>{`
      .cropBox {
        border-bottom: 1px solid lightgray;
        // padding: 10px;

 }
      .cropText{
        font-family: fantasy;
        color: #ab3333;
        line-height: 18px;

      }
      .hidden {
        display: none;
      }
      `}</style>
    </div>
  );
}

CropList.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};


export default CropList;
