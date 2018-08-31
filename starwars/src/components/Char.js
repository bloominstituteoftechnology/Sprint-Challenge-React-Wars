import React from 'react';
import './StarWars.css';

function Char(props) {
    return (
        <div className='Char-container'>
            <h3 className='name'>Name: {props.char.name}</h3>
            <p className='charcs'>
                Height: {props.char.height},
                Mass: {props.char.mass},
                HairColor: {props.char.hairColor},
                SkinColor: {props.char.skinColor},
                EyeColor: {props.char.eyeColor},
                BirthYear: {props.char.birthYear},
                Gender: {props.char.gender}
            </p>
        </div>
    );
};

export default Char;