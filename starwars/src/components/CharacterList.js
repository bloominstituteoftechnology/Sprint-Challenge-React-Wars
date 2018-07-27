import React from 'react';
import CharacterData from './CharacterData.js';

const CharacterList = props => {
    return(
        <div>
            {props.list.map(character =>{
                return (
                    <CharacterData 
                    key = {character.key}
                    birthyear = {character.birthyear}
                    created = {character.created}
                    edited = {character.edited}
                />
                )}   
            )}
        </div>
    )
}

export default CharacterList;