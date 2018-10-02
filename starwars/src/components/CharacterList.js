import React from 'react';
import './StarWars.css';
import Character from './Character';

const CharacterList = (props) => {
    return (
        <div >
            <div id="list-container">{props.value.map(item => <Character className="character-comp" obj={item} key={item.created}/>)}</div>    
        </div>
    )
}


export default CharacterList;