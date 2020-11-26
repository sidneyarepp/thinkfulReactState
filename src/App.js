import React, { Component } from 'react';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import './App.css';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Heading">
        <h1>YOUR APPLICATION NAME!</h1>
        </div>
        <br />
        <div className="Component">
        <RouletteGun
          numberOfChambers = {8}
          bulletInChamber = {8}
        />
        </div>
      </div>
    );
  }
}

export default App;
