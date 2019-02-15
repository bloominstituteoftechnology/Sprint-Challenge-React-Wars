import React from 'react';
import './StarWars.css';

function Char(props) {
    return (
        <div className='char-container'>
            <h3 className='name'>Name: {props.char.name}</h3>
            <p className='charcs'>Height: {props.char.height}</p>
            <p className='charcs'>Mass: {props.char.mass}</p> 
            <p className='charcs'>HairColor: {props.char.hair_color}</p>
            <p className='charcs'>SkinColor: {props.char.skin_color}</p>  
            <p className='charcs'>EyeColor: {props.char.eye_color}</p>
            <p className='charcs'>BirthYear: {props.char.birth_year}</p>
            <p className='charcs'>Gender: {props.char.gender}</p>        
        </div>
    );
};

export default Char;