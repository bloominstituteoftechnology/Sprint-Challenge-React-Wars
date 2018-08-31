import React from 'react';
import Character from './Character.js'

const CharacterList = props => {
    return (
      <div>
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