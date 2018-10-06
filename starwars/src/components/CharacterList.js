import React from 'react';
import Character from './Character'


const CharacterList = (props) => {
    return (
        <div>
            {props.list.map(item => <Character  key={item.created} obj={item}/>)}
        </div>
    )
}

export default CharacterList