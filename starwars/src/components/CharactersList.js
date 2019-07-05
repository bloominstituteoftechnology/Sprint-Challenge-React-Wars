import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = props => {
    return (
        <div className="my-list">
            {props.mycharacters.map (mychar => (
                <Character
                    key={mychar.name}
                    mychar={mychar}
                />
            ))}
        </div>
    );
}

export default CharacterList;