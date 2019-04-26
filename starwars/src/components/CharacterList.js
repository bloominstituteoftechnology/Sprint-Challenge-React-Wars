import React from 'react';
import Character from './Character';
import './StarWars.css';


const CharacterList = props => {
    console.log(props.starwarsChars)
    return (

        <div className="characters-list-wrapper">
            {props.starwarsChars.map(character => (
                <div className="character-card"><Character key={character.name}
                characterData={character}/>

            ))};
        </div>




    );
};



export default CharacterList; 