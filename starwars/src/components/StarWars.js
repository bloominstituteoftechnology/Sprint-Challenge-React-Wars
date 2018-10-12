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
              <p>Born in the year: {character.birth_year}</p>
              <p>Eyes? {character.eye_color}</p>
              <p>Appears in {character.films.length} movie(s).</p>
              {/* <ul>Appears in: {character.films.map ( (film, i) => { */}
                  {/* return <Film key={i}thisFilm={film} /> */}
                  {/* return <li key={i}>This movie:<br/>{film}</li> */}
                {/* })} */}
              {/* </ul> */}
            </li>
            )
        })}
      </ul>
    </div>
  )
}

export default StarWars;