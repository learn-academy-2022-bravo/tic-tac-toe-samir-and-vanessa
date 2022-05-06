import React, { Component } from 'react';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Let's Play Tic Tac Toe!</h1>
        </div>
        <Game></Game>
      </div>
    );
  }
}

export default App;