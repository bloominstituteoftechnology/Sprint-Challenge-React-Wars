import React from 'react';
import '../App.css';

const Character = props => {
    return (
        <div className='characterCard'>
        <div className='name'>
        <h1>
            {props.characterOnProps.name}
        </h1>
        </div>
        <div className='information'>
        <h3>Birthdate: {props.characterOnProps.birth_year}</h3>
        <h3>Gender: {props.characterOnProps.gender}</h3>
        <h3>Height: {props.characterOnProps.height}</h3>
        <h3>Hair Color: {props.characterOnProps.hair_color}</h3>
        </div>
        </div>
    );
};

export default Character;