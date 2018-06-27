import React, { Component } from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h4 className="App-subtitle">Match cards to win!</h4>
        </header>
        <body className="Card">
          <div><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard></div>
          <div><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard></div>
          <div><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard></div>
          <div><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard><MemoryCard></MemoryCard></div>
        </body>
      </div>
    );
  }
}

export default App;
