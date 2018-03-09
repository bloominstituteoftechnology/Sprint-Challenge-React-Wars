import React from 'react';
import Character from './Character';
import './StarWarsCharacters.css';

// Now that this Functional component StarWarsCharacters has access to the list of star wars characters
// via the charList prop sent down from App.js, you can now use react to create a <div> for each object in
// the list, which returns whatever the class component 'Character' (along with two props - key and character).

export const StarWarsCharacters = (props) => {
    return (
      <div className="StarWarsCharacters">
        {props.charList.map((item => {
          return <Character key={item.id} character={item} />
        }))}
      </div>
    )
  };