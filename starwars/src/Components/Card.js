import React, { Component } from 'react';

class Card extends Component{
    constructor(){
        super();
        this.state={
            chars: [],
        }
    }
    render() {
        const { chars } = this.state;
        return (
            <div>{chars.map(char => <div key={char.name}>{char.name}</div>)}</div>
        )
    }
    
}

export default Card;