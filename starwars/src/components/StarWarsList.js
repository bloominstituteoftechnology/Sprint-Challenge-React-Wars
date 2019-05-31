import React from 'react';
import './StarWars.css';



const Character = props => {
  return (
    <div className='card'>
      <div className='name'>
        <h1>
          {props.starwarsChars.name}
        </h1>
      </div>
      <div className='char-data'>
        <h2>Year:{props.starwarsChars.year}</h2>
        <h2>Gender: {props.starwarsChars.gender}</h2>
        <h2>Height: {props.starwarsChars.height}</h2>
        <h2>Hair: {props.starwarsChars.hair}</h2>

      </div>
    </div>
  );
}
export default Character;
