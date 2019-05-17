import React from 'react';

const Character = props => {
    return (
        <div className="character">
            <div className="name">Name: <span>{props.character.name}</span></div>
            <div className="gender">Gender: <span>{props.character.gender}</span></div>
            <div className="height">Height: <span>{props.character.height}px</span></div>
        </div>
    )
}

export default Character;