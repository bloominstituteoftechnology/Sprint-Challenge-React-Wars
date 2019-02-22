import React from 'react'

const Character = props => {
  return (
    <div className='character-card'>
    {props.starwars.map(movie => {
      return (
        <div className='card' key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Director: {movie.title}</p>
        <p>Producer: {movie.title}</p>
        <p>Release Date: {movie.release_date}</p>

        </div>
      )
    })}
      
    </div>
  );
}

export default Character
