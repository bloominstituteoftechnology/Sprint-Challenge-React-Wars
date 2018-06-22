import React from 'react';
import CharInfo from './CharInfo';

const CharacterCard= props => {
    return (
        <div>
            {props.character.map(char => <CharInfo starwars={char} />)}
            {/*.character ^^ here, has to refer to the character that you named in App.js line 38*/}
        </div>    
    );
};

export default CharacterCard;