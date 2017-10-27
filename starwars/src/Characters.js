import React, { Component } from 'react';
// import './Characters.css';

class Character extends Component {
    constructor() {
        super();
        this.state = {
            names: [],
        };
    }

componentDidMount() {
    fetch('https://swapi.co/api/people/?')
    .then(results => {
        return results.json();
    }).then(data => {
        let names = data.results.map((name) => {
            return(
                <div key={name.results}>
                    <div>{name.names}</div>
                </div>
            )
        })
        this.setState({names: names});
        console.log("state", this.state.names);
    })
}
    render() {
        return (
            <div>
                <div>
                    {this.state.names}
                    
                </div>
            </div>
        );
    }
}

export default Character;