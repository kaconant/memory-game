import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Ajax from './Ajax.js';

class App extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <Link to='/memory'>Memory Game</Link>
                    <Link to='/ajax'>Ajax</Link>
                </div>
                <Switch>
                    <Route path='/memory' component={MemoryGame} />
                    <Route path='/ajax' component={Ajax}/> 
                    <Route path='/' component={MemoryGame}/>
                </Switch>
            </div>
        );
    }
}

export default App;

// exact is a props that will do the same thing as Switch