import React, { useState, Component } from 'react'
import logo from './locker.png';
import './App.css';
import AppContents from './AppContents';

export class HomePage extends Component {
    state = {
        clusters: [],
    }

    componentDidMount() {
        const url='http://localhost:3001/contexts';
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    clusters: result,
                })
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Davy Jones" />
                    <h1 className="App-name">
                        Locker
                    </h1>
                </header>
                <AppContents clusters={this.state.clusters}/>
            </div>
        )
    }
   }
   