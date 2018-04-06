// Use  name, birth_year, gender, height, mass, eye_color, hair_color, skin_color, created, edited, 

import React from 'react';
import './Cards.css';

const Cards = props => {
    return (
        <div className = 'container'> 
            <div className = 'data'>
                <div className = 'data1'>
                <p> {props.name.toUpperCase()} </p>
                </div>
                    <p style = {{color: 'black'}}> BIRTH YEAR: {props.birth_year} </p>
                    <p style = {{color: 'blue'}}> GENDER: {props.gender.toUpperCase()} </p>
                    <p style = {{color: 'lightblue'}}> HEIGHT: {props.height} </p>
                    <p style = {{color: 'white'}}> WEIGHT: {props.mass} </p>
                    <p style = {{color: 'yellowgreen'}}> EYE COLOR: {props.eye_color.toUpperCase()} </p>
                    <p style = {{color: 'purple'}}> HAIR COLOR: {props.hair_color.toUpperCase()} </p>
                    <p style = {{color: 'red'}}> SKIN COLOR: {props.skin_color.toUpperCase()} </p>
            </div>
        </div>
    )
}

export default Cards;
