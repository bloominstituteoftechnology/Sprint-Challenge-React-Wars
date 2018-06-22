import React from 'react';
import Character from 'Character'

const CharacterNames = props => {
    return ( 
       <div> 
        {props.character.map(character => <Character newChar={character}/>
        )
        };
       </div>
);
};

export default CharacterNames;