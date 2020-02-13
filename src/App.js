import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Footer from './Footer';
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

      <div className="footer">

        <Footer/>
      </div>

      <style jsx>{`
      .App {
        color: green;
      }

      .footer{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: red;
      color: white;
      text-align: center;
    }
      `}</style>

    </div>
  );
}

export default App;
