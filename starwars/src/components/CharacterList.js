import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {/* <h2 className="character-list-header title">Star Wars Character List</h2> */}
            <div className="character-list-container title">
                {props.starwarsChars.map( character => (
                    <Character 
                        key={character.name}
                        character={character}
                    />
                )

                )} 
            </div>
        </div>
    )
}

export default CharacterList;
