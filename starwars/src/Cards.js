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
                <div className = 'data2'>
                    <div className = 'data21'>
                    <p> BIRTH YEAR: {props.birth_year} </p>
                    <p> GENDER: {props.gender.toUpperCase()} </p>
                    </div>
                    <div className = 'data22'>
                    <p> HEIGHT: {props.height} </p>
                    <p> WEIGHT: {props.mass} </p>
                    </div>
                </div>
                <div classname = 'data3'>
                    <p> EYE COLOR: {props.eye_color.toUpperCase()} </p>
                    <p> HAIR COLOR: {props.hair_color.toUpperCase()} </p>
                    <p> SKIN COLOR: {props.skin_color.toUpperCase()} </p>
                </div>
            </div>
        </div>
    )
}

export default Cards;
