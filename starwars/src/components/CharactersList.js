import React from 'react';
import './StarWars.css';
import Character from './Character';


function CharactersList(props) {
    return(
        <div class="container">
        {props.char.map(character => {
            return (
                <Character char={character}/>
            )
        })}

        </div>
    );
};

export default CharactersList;