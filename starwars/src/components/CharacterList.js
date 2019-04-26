import React from 'react';
import Character from './Character'
import './StarWars.css';


const CharacterList = props => { //props is data
    console.log(props.starwarsChars) //is it working?
    return (

        <div className="char-wrapper">
            {props.starwarsChars.map( character => (
                <Character key={character.name}
                characterData={character}/>

            ))}
        </div>




    );
};



export default CharacterList;