import React, { Component } from 'react';

const CharacterEyes = props => {
    return (
        <div>
            <h2>EYE COLOR</h2>
            {props.chars.map(char => (
                <div>{char.eye_color}</div>
            ))}
        </div>
    )
}

export default CharacterEyes;