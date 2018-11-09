import React  from 'react';
import Character from './Character';


function CharactersContainer(props){
    const charactersDiplay = props.characters.map(character => <Character character={character} />);

    return (
        <div className="characters-container">
              {charactersDiplay}
        </div>
    );
}

export default CharactersContainer;