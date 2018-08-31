import React from 'react';
import Character from './Character';
import './StarWars.css';

function CharacterList(props) {
    return <div className="characterlist">
        {props.charas.map(chara =>
        <Character
        chara={chara}
        key={chara.created}
        //function?
        />)}
    </div>
}

export default CharacterList;