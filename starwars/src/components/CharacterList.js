import React from 'react';
import Character from './Character.js'
import './StarWars.css'

const CharacterList = props => {
    return (
      <div className="card-container">
          {props.starwarsChars.map((starwarsChar) => (
              <Character
                    key={starwarsChar.name}
                    starwarsChar={starwarsChar}
              />
          ))}
      </div>  
    )
}

export default CharacterList;