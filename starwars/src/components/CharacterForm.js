import React from 'react';

const CharacterForm = props => {
    return (
        <form>
            <input 
                onChange={props.handleCharacterChange} //handleCharacterChange = toggleCharacterComplete, this is where the object is being set up for output
                type="text"
                name="character"
                value={props.value}
                placeholder="...character"
            />
            <button onClick={props.handleAddCharacter}>Character Pick</button>
            <button onClick={props.handleClearCharacter}>Clear Character</button>
        </form>
    );
};
export default CharacterForm;