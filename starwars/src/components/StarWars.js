import React from 'react';
import './StarWars.css';
import Paginate from './Paginate';


const StarWars = props => {
  return (
    <div className='char-container'>
      {(props.chars.map(char => {
        return (
          <div className='char' key={char.created}>
            <h2>{char.name}</h2>
            <p>Appears in {char.films.length} movies</p>
            <p>Birth year {char.birth_year}</p>
            <p>{char.height}cm tall, {char.mass}kg</p>
            <p>Eye color: {char.eye_color}, Hair color: {char.hair_color}</p>
          </div>
        )
      }))}
      <Paginate nextPage={props.nextPage} prevPage={props.prevPage} clicked={props.clicked} />


    </div>
  );
}

export default StarWars;
