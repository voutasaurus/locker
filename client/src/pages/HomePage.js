import React, { Component } from 'react'
import logo from './locker.png';
import clusterlogo from './kubernetes.svg';
import './App.css';

export default function HomePage() {
    return (
     <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="Davy Jones" />
            <h1 className="App-name">
                Locker
            </h1>
        </header>
        <header className="App-sub-header">
            <div class="dropdown" className="Cluster-dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={clusterlogo} className="Cluster-logo"/>
                    <h4 className="Cluster-button-text">Cluster</h4>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">TODO: get this list from API</a>
                        <a class="dropdown-item" href="#">Some cluster</a>
                        <a class="dropdown-item" href="#">Another cluster</a>
                </div>
            </div>
        </header>
        <p>TODO: dynamically list namespaces or secrets or key/value pairs depending on context</p>
     </div>
    )
   }
   