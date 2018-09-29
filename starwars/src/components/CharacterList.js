//this component will be used to render list of character cards

import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) =>{
    return (
        <div>
            <h1>CharacterList Test</h1>
            {props.characters.map(character => {return (<CharacterCard />)})}
        </div>
    )
}

export default CharacterList;