
import React from 'react';

function Data(props)  {
  const chars = props.char;

  return (
    <div className='List'>
        <h3 className='Name'><span>{chars.name}</span></h3>
          <li>Gender: {chars.gender}</li>
          <li>Born in: {chars.birth_year}</li>
          <li>Height: {chars.height}cm</li>
          <li>Eye Color: {chars.eye_color}</li>
        <div className='Vehicles'>
          <a href={chars.starships}>Ships</a>
        </div>
        <div className='Films'>
          <a href={chars.films}>Films</a>
        </div>
    </div>
  )
};

export default Data