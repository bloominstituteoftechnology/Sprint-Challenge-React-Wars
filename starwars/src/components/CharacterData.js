import './StarWars.css';
import React from 'react';

const CharacterData = props => {
    return (
        <div>
            {props.data}
        </div>
    )
}

export default CharacterData;