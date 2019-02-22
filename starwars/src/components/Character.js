import React from 'react'

const Character = props => {
  return (
    <div className='character-card'>
    {props.starwars.map(movie => {
      return (
        <div className='card' key={movie.name}>
        <h2>{movie.name}</h2>
        <p>Gender: {movie.gender}</p>
        {/* <p>Eye Color: {movie.eye_color}</p> */}
        <p>Birth Year: {movie.birth_year}</p>

        </div>
      )
    })}
      
    </div>
  );
}

export default Character;
