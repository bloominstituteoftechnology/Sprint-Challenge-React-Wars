import React from 'react';
import luke from './Images/0.jpg';
import c3po from './Images/1.jpg';
import r2d2 from './Images/r2d2.jpg';
import vader from './Images/vader.jpg';
import leia from './Images/leia.jpg';
import owen from './Images/owen.jpg';
import beru from './Images/beru.jpg';
import r5d4 from './Images/r5d4.jpg';
import biggs from './Images/biggs.jpg';
import obiwan from './Images/obiwan.jpg';


// creating a character componenet 
//creating the pictures array 

const Character = props => {
    const pics = [
        luke,
        c3po,
        r2d2,
        vader,
        leia,
        owen,
        beru,
        r5d4,
        biggs,
        obiwan

    ];
    //rendering the picture of each character  
    return(
        <div className="character">
            <h3>{props.character.name}</h3>
            <img src={pics[props.id]}/>
            <ul>
                <li>Gender: {props.character.gender}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Birth year: {props.character.birth_year}</li>
            </ul>
        </div>
    )
}


export default Character;