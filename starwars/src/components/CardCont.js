import React, { Component } from 'react';
import App from '../App.js';
import Card from './Card.js';

const CardCont = (props) => {
    return (
        <section className='cardCont'>
        {props.chars.map((char, index) => {
            return <Card char = {char}
                                    key = {index} />
        })}
        </section>
    )
}

export default CardCont