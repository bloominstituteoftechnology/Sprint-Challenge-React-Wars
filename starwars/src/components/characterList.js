import React from 'react';
import Character from './Character'
import './CharacterList.css'


const CharacterList = (props) => {
    return (
        <div className='Main'>
        {props.list.map(item => <Character backgroundHandler={props.backgroundHandler} key={item.created} obj={item} />)}
        </div>
    )
}

export default CharacterList;