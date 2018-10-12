import React from 'react';
import './StarWars.css'
import Film from './Film'

const StarWars = props => {
  return(
    <div>
      <ul>
        {props.characters.map((character, i) => {
          return (
            <li key={i}>
              <h1>{character.name}</h1>
              <p>Current hair status: {character.hair_color}</p>
              <ul>Appears in: {character.films.map ( (film, i) => {
                  {/* return <Film /> */}
                  return <li>{film}</li>
                })}
              </ul>
            </li>
            )
        })}
      </ul>
    </div>
  )
}

export default StarWars;