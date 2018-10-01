import React from 'react';
import './StarWars.css';
import Character from './Character';

const CharacterList = (props) => {
    return (
        <div className="list-container">
            <div>{props.value.map(item => <Character classNmae="character-comp" obj={item} key={item.created}/>)}</div>    
        </div>
    )
}


export default CharacterList;