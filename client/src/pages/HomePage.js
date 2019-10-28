import React, { useState, Component } from 'react'
import logo from './locker.png';
import './App.css';
import AppContents from './AppContents';

export class HomePage extends Component {
//    const clustersData = [
//        "cluster one",
///        "cluster two",
//        "todo: get these from API"
//    ]
//
//    const [clusters, setClusters] = useState(clustersData)

    state = {
        clusters: [],
    }

    componentDidMount() {
        const url='http://localhost:3000/contexts';
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
   