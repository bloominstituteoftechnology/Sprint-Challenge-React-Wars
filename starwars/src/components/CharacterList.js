import React from 'react';
import Character from './Character'
import './StarWars.css'

const CharacterList = ({starwarsChars}) => {
    console.log(starwarsChars) //array of character objects

    //pass each character object into Character
    //returns an unorder list for each character.
    const starwarsCharsList = starwarsChars.map(character =>{
        console.log('here I am');
        return <Character character={character} key={Math.random()}/>
    })
    return (
        <div>
            {starwarsCharsList}
        </div>
  )
}

export default CharacterList;

