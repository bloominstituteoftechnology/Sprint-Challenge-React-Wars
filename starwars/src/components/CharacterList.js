import React from 'react';
import Character from './Character';

const CharacterList = props => {
    const characters = props.characterList.slice(0, 5).map(character => {
        return (
            <div key={character.created}>
                <Character character={character} />
            </div>
        );
    });

    return (
        <div>
            {characters}
        </div>
    );
};

export default CharacterList;