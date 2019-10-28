import React from 'react'
import clusterlogo from './kubernetes.svg';
import './App.css';

export default function AppContents(props) {
    return (
        <div className="AppContents">
        { props.clusters.length > 0 ? (
            <header className="App-sub-header">
            <div className="Cluster-dropdown">
                <img src={clusterlogo} className="Cluster-logo"/>
                <select class="selectpicker" className="Cluster-selector">
                    {props.clusters.map(cluster => (
                        <option>
                        {cluster}
                        </option> 
                    ))}
                </select>
            </div>
            </header>
        ) : (
            <h1 className="Zero-clusters">No Clusters Found ¯\_(ツ)_/¯</h1>
        )}
        </div>

    )
   }
   