import React from 'react';
import './StarWars.css';



const Character = props => {
  return (
    <div className='card'>
      <div className='name'>
        <h1>
          {props.characterOnProps.name}
        </h1>
      </div>
      <div className='char-data'>
        <h2>Born:{props.characterOnProps.Born_year}</h2>
        <h2>Gender: {props.characterOnProps.gender}</h2>
        <h2>Height: {props.characterOnProps.height}</h2>
        <h2>Hair: {props.characterOnProps.hair}</h2>

      </div>
    </div>
  );
}
export default Character;
