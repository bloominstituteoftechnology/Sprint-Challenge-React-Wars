// import React from 'react';
//
//
// const Card = props => {
//   const {
//     name,
//     height,
//     hair_color,
//     eye_color,
//     birth_year,
//     gender,
//     mass,
//   } = props.character;
//
//   return (
//     <div className='card'>
//       <h2 className='name'>{name}</h2>
//       <div className='subtitle'>
//         <p>Born: {birth_year}</p>
//         <p>Identifies as: {gender}</p>
//       </div>
//       <div className='details'>
//         <p>Height: {height} cm</p>
//         <p>Mass: {mass} kg</p>
//         <p>Hair: {hair_color}</p>
//         <p>Eyes: {eye_color}</p>
//       </div>
//     </div>
//   )
// }
//
// export default Card;

import React from 'react';
import Homeworld from './Homeworld.js';
// import Classification from './Classification.js'


const Card = props => {
  const {
    name,
    height,
    hair_color,
    eye_color,
    birth_year,
    gender,
    mass,
    homeworld,
    // species,
  } = props.character;

  return (
    <div className='card'>
      <h2 className='name'>{name}</h2>
      {/* <Classification species={species} /> */}
      <div className='subtitle'>
        <p>Born: {birth_year}</p>
        <p>Identifies as: {gender}</p>
      </div>
      <div className='details'>
        <p>Height: {height} cm</p>
        <p>Mass: {mass} kg</p>
        <p>Hair: {hair_color}</p>
        <p>Eyes: {eye_color}</p>
      </div>
      <Homeworld homeworld={homeworld} />
    </div>
  )
}

export default Card;
