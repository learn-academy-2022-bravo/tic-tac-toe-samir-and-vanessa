import React, { Component } from 'react';
import './App.css';
import './TicTacToe.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's Play Tic Tac Toe!</h2>
        </div>
        <p className="App-intro">
          <Game></Game>
        </p>
      </div>
    );
  }
}

export default App;