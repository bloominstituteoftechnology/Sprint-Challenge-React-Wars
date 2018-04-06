import React from 'react';
import './css/profile.css';

export const Profile = (props) => {
  return (
    <React.Fragment>
      {props.starwarsChars.map((char, i) => (
        <div key={char+i} className='Container'>
          <h1 className='Container__Header'>{char.name}</h1>
          <div className='Container__Info'>
            <p><span className='Container__DataHeader'>birth year</span>: {char.birth_year}</p>
            <p><span className='Container__DataHeader'>gender</span>: {char.gender}</p>
            <p><span className='Container__DataHeader'>hair color: </span>: {char.hair_color}</p>
            <p><span className='Container__DataHeader'>eye color: </span>: {char.eye_color}</p>
            <p><span className='Container__DataHeader'>skin color: </span>: {char.skin_color}</p>
            <p><span className='Container__DataHeader'>height</span>: {char.height} cm</p>
            <p><span className='Container__DataHeader'>mass</span>: {char.mass} kg</p>
          </div>
        </div>

      ))}
    </React.Fragment>
  );
}
