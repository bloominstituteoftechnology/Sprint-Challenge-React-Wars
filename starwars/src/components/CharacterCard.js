//this component will be used to render each character card

import React from 'react';
import './StarWars.css'

const CharacterCard = (props) => {
    return (
        <div className='card'>
            <h1 className='name'>{props.characterInfo.name}</h1>
                <ul>
                    <li><span className='descriptor'>Born:</span> {props.characterInfo.birth_year}</li>
                    <li><span className='descriptor'>Gender:</span> {props.characterInfo.gender}</li>
                    <li><span className='descriptor'>Height:</span> {props.characterInfo.height} cm</li>
                    <li><span className='descriptor'>Mass:</span> {props.characterInfo.mass} kg</li>
                    <li><span className='descriptor'>Eye color:</span> {props.characterInfo.eye_color}</li>
                    <li><span className='descriptor'>Skin color:</span> {props.characterInfo.skin_color}</li>
                </ul>
        </div>
    )
}

export default CharacterCard;


