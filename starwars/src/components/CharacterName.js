import React, { Component } from 'react';

const CharacterName = props => {
    return (
        <div> <h2>CHARACTER NAME</h2> 

            {props.chars.map(char => (
                <div>{char.name}</div>
            ))}
        </div>
    )
}

export default CharacterName;