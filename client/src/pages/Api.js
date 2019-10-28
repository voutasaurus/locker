import React, { Component } from 'react'

class Api extends Component {
    state = {
        clusters: []
    }

    componentDidMount() {
        const url='http://localhost:3000/contexts';
        fetch(url)
            .then(result => result.json)
            .then(result => {
                this.setState({
                    clusters: result,
                })
            })
    }

}