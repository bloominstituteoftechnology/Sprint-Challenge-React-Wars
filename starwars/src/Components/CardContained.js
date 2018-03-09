import React, { Component } from 'react';
import CardContainer from './CardContainer';

class CardContained extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                {this.props.data.map((value, index) => 
                <CardContainer key={index} data ={value}/>)}
            </div>
        );
    };
}

export default CardContained;