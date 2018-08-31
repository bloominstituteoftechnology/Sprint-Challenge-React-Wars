import React from 'react';
import './StarWars.css';

function Char(props) {
    return (
        <div className='char-container'>
            <h3 className='name'>Name: {props.char.name}</h3>
            <p className='charcs'>
                Height: {props.char.height},
                Mass: {props.char.mass},
                HairColor: {props.char.hair_color},
                SkinColor: {props.char.skin_color},
                EyeColor: {props.char.eye_color},
                BirthYear: {props.char.birth_year},
                Gender: {props.char.gender}
            </p>
        </div>
    );
};

export default Char;