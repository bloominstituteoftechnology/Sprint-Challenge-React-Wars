//this component will be used to render each character card

import React, { Component } from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            <h1>CharacterCard Test</h1>
            <p>{props.characterInfo.name}</p>
        </div>
        

    )
}

export default CharacterCard;


