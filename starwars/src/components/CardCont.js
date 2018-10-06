import React, { Component } from 'react';
import App from '../App.js';
import Card from './Card.js';

const CardCont = (props) => {
    return (
    <div className="cardCont">
    {props.chars.map((char, ind)  => {
        return <Card char = {char}
                                key = {ind} />
            }
        )
    }
    </div>
        
    
    )
}

export default CardCont;