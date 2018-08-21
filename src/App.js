import React, { Component } from 'react';
import './App.css';
import MemoryGame from './MemoryGame.js';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <MemoryGame/>
            </React.Fragment>
        );
    }
}

export default App;

// exact is a props that will do the same thing as Switch