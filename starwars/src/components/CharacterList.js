import React from 'react';
import Character from './Character'

const CharacterList = (props) => {
    return (
        <div className='main'>
            {props.list.map(item => <Character bgHandler ={props.bghandler} key={item.created} obj={item}/>)}
        </div>
    )
}

export default CharacterList