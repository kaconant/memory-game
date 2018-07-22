import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import "./Jobs.css";
import JobsListItem from './JobsListItem.js';
import Job from './Job.js';
import axios from 'axios';

class Jobs extends Component {
    
    constructor() {
        super();
        this.state = {
            jobs : [] 
        };

    }

    componentWillMount() {
        axios.get('/api/jobs')
            .then(({ data }) => { this.setState({ jobs: data }) })
            .catch(err => console.log(err));
    }
    
    render() {
        
        // long version of below:
        // let jobs JSX = this.state.jobs.map((job) => {
        //     return <JobsListItem title={job.title} location={job.location}...or {...job}
        //     }
        // )


        // take our data that is an array of objects and then turn into into an array of JSX --> trying to spit out a visual job 
        let jobsJSX = this.state.jobs.map((job, i) => {return <JobsListItem key={i} {...job}/>})

        return(
            <div>
                <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Jobs in Atlanta</h1>
                    <h4 className="App-subtitle">Click to explore jobs!</h4>
                </header>
                </div>
                <div className="Jobs">
                <Switch>
                    <Route exact path='/jobs' render={ () => jobsJSX }/>
                    <Route path='/jobs/:id' component={Job}/>
                </Switch>
                </div>
            </div>
        )
    }
}

export default Jobs;
