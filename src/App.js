import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import MarketSchedule from './MarketSchedule';
import CropSchedule from './CropSchedule';
import Bio from './Bio';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Header/>

    <Switch>
    <Route exact path='/' component={Bio} />
    <Route path='/cropschedule' component={CropSchedule} />
    <Route path='/marketschedule' component={MarketSchedule} />
    </Switch>

    <style jsx>{`
      .App {
        color: green;
      }
      `}</style>

      </div>
    );
  }

  export default App;
