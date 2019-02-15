import React from 'react';

const Character = props => {
    return (
        <ul className="character">
            <li>{props.character.name}</li>
        </ul>
    );
}

export default Character;