import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.mycharacters.map (mychar => (
                <Character
                    key={mychar.id}
                    mychar={mychar}
                />
            ))}
        </div>
    );
}

export default CharacterList;