import React, { Component } from 'react';
import MemoryCard from './MemoryCard';
import './App.css';


class App extends Component {
  render() {
    
    let row1 = [];
    let row2 = [];
    let row3 = [];
    let row4 = [];

    for (let i=0; i<4; i++) {
        row1.push(<MemoryCard />);
        row2.push(<MemoryCard />);
        row3.push(<MemoryCard />);
        row4.push(<MemoryCard />);
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h4 className="App-subtitle">Match cards to win!</h4>
        </header>

          <div>
            {row1}
          </div>
          <div>
            {row2}
          </div>
          <div>
            {row3}
          </div>
          <div>
            {row4}
          </div>
          
      </div>
    );
  }
}

export default App;
