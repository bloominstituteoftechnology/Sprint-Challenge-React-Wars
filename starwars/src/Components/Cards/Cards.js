import React, { Component } from 'react';
import CardComp from '..//Card/Card.js';
import CardsStyles from './CardsStyles.js';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <CardsStyles>
                {this.props.data.map((value, index) => <CardComp key={index} data ={value}/>)}
                </CardsStyles>
            </div>
        );
    };
}

export default Cards;