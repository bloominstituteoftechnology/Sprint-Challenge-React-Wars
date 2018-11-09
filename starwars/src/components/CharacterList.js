import React  from 'react';
import Character from './Character';
import './StarWars.css';


function CharactersContainer(props){
    const charactersDiplay = props.characters.map((character, index) => <Character key={index} character={character} />);

    return (
        <div className="characters-container">
              {charactersDiplay}
        </div>
    );
}

export default CharactersContainer;