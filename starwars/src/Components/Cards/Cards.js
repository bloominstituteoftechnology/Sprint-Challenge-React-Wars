import React, { Component } from 'react';
import CardComp from '..//Card/Card.js';
//import CardsStyle from '.cardsStyles.css';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                {this.props.data.map((value, index) => <CardComp key={index} data ={value}/>)}
            </div>
        );
    };
}

export default Cards;