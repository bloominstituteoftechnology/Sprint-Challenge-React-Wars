import React from 'react';

import CharFilms from './CharFilms';

const StarWarsCharsBio = props => {
    return (
        <div className='eachCharCard'>
        {/* <img src='https://i.redd.it/2qmnb44sbt7z.jpg' alt={props.characteristic.name} /> */}
            <div className='charInfo'>
                <h2>{props.characteristic.name}</h2>
                <p> <strong>Birth year:</strong> {props.characteristic.birth_year}</p>
                <p> <strong>Gender:</strong> {props.characteristic.gender}</p>
                <p> <strong>Hair color:</strong> {props.characteristic.hair_color}</p>
                <p> <strong>Birth year:</strong> {props.characteristic.eye_color}</p>
                {props.characteristic.films.map((eachFilm, index) => (
          <CharFilms key={index} filmArray={eachFilm} />
        ))}
                
            </div>
        </div>
    )
}

export default StarWarsCharsBio;