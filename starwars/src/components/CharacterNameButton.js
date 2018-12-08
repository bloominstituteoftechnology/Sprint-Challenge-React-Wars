import React from 'react'
import CharacterName from './CharacterName';

const NameButton = (props) => {
    return (
        <div>
            <button className = "toggleNames">Click for names</button>
            <CharacterName data={props.data}/>
        </div>
    )
};

export default NameButton;