import React from 'react';
import Character from './Character'
const CharacterList = (props) => {
    console.log('help')
    return (
        props.list.map(item => <Character key={item.created} obj={item} />
    ))
}

export default CharacterList;