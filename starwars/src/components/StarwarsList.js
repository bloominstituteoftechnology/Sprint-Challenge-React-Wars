import React from 'react';
import StarwarsCharacter from './StarwarsCharacter';
import uuidv4 from 'uuid/v4';

export default function StarwarsList(props) {
  return (
    <div>
      {
        props.charactersData.map(char => {
          return (
            <StarwarsCharacter key={uuidv4()} char={char} />
          )
        })
      }
    </div>
  )
}