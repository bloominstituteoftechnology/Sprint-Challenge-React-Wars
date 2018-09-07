import React from 'react';

function StarWarsCharacter(props) { //this is the Character Maker...grabbing properties from getCharacters
    return (
        <div onClick={() => props.handleCharacterChange(props.getCharacters.id)}>
            {props.this.getCharacters.character}
        </div>
    );
}
    export default StarWarsCharacter;