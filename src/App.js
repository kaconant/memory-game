import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';

class App extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <Link to='/memory'>Memory Game</Link>
                    <Link to='/jobs'>Jobs in ATL</Link>
                </div>
                <Switch>
                    <Route path='/memory' component={MemoryGame} />
                    <Route path='/jobs' component={Jobs}/> 
                </Switch>
            </div>
        );
    }
}

export default App;

// exact is a props that will do the same thing as Switch