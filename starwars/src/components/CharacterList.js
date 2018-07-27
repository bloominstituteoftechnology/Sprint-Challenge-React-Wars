import React from 'react';
import Character from './Character';
import './StarWars.css'

const CharacterList = props => {
    return (
        <div className= "character-list">
            <h2 className= "list-title">Character Info</h2>
            {props.characters.map(characters =>
                <Character 
                    name = {characters.name}
                    born = {characters.birth_year}
                    gender = {characters.gender}                    
                />
        )}
        </div>
    )
}

export default CharacterList