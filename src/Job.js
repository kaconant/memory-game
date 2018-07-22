import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Job.css';
import axios from 'axios';

class Job extends Component {

    constructor() {
        super();
        this.state = {
            jobs: []
        }
    };

    componentWillMount() {
        let jobId = this.props.match.params.id
        axios.get('/api/jobs/' + jobId)
            .then(({ data }) => { 
                this.setState(data) 
            })
            .catch(err => console.log(err));
    }


    render() {
        return(
            <div className ="Job">
                <h1>{ this.state.title}</h1>
                <a href={ this.state.company_url }><img src={ this.state.company_logo } width="100" />
                </a>
                <div dangerouslySetInnerHTML={{__html: this.state.how_to_apply}}></div>
                <span dangerouslySetInnerHTML={{__html: this.state.description}}></span>
            </div>
        )
    }

}

export default Job;