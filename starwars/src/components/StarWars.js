import React from 'react';
import './StarWars.css';

const StarWars = props => {
  console.log(props.prevPage);
  let prev = props.prevPage;
  let next = props.nextPage;
  console.log(next);
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
      <button onClick={console.log('clicked')} >Prev</button>
      {/*<button onClick={props.getCharacters(props.nextPage)}>Next</button>*/}

    </div>
  );
}

export default StarWars;
