import React from 'react';
import CropList from './CropList';
import './App.css';




const availableProduce = [
  {
    month: 'January',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  },
  {
    month: 'February',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'March',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'April',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Garlic',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Potatoes'
    ]
  },
  {
    month: 'May',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Asparagus',
      'Cauliflower',
      'Garlic',
      'Lettuce',
      'Potatoes',
      'Radishes'
    ]
  },
  {
    month: 'June',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Blackberries',
      'Cherries',
      'Raspberries',
      'Strawberries',
      'Asparagus',
      'Broccoli',
      'Cauliflower',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash'
    ]
  },
  {
    month: 'July',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Rhubarb',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Raspberries',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'August',
    selection: [
      'Apples',
      'Apricots',
      'Blackberries',
      'Blueberries',
      'Cherries',
      'Melons',
      'Nectarines',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Rhubarb',
      'Strawberries',
      'Tomatoes',
      'Beets',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'September',
    selection: [
      'Apples',
      'Blueberries',
      'Grapes',
      'Melons',
      'Peaches',
      'Pears',
      'Plums',
      'Raspberries',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'October',
    selection: [
      'Apples',
      'Grapes',
      'Hazelnuts',
      'Melons',
      'Peaches',
      'Pears',
      'Tomatoes',
      'Broccoli',
      'Brussel Sprouts',
      'Cabbage',
      'Carrots',
      'Cauliflower',
      'Corn',
      'Cucumber',
      'Eggplant',
      'Garlic',
      'Green Beans',
      'Kohlrabi',
      'Lettuce',
      'Mushrooms',
      'Onions',
      'Peas',
      'Peppers',
      'Potatoes',
      'Pumpkins',
      'Radishes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'November',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Squash',
      'Turnips'
    ]
  },
  {
    month: 'December',
    selection: [
      'Apples',
      'Hazelnuts',
      'Pears',
      'Broccoli',
      'Carrots',
      'Cauliflower',
      'Garlic',
      'Mushrooms',
      'Onions',
      'Potatoes',
      'Turnips'
    ]
  }
];

function CropSchedule(){
  return (
    <div className="cropClass">
      <h2 className="cropScheduleHeader"> Crop Schedule </h2>

      {availableProduce.map((crop, index) =>
        <CropList
          month={crop.month}
          selection={crop.selection}
          key={index}/>
      )}
      <style jsx>{`

      .cropClass {

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

      .cropScheduleHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
      }
      `}</style>




    </div>
  );
}

export default CropSchedule;
