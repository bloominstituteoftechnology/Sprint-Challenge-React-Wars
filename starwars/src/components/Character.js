import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <table className='character'
        id={props.character.created}>
        <thead>
          <tr>
            <th>{props.character.name}</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Birth year:</th>
          <td>{props.character.birth_year}</td>
        </tr>
        <tr>
          <th>Gender:</th>
          <td>{props.character.gender}</td>
        </tr>
        <tr>
          <th>Hair color:</th>
          <td>{props.character.hair_color}</td>
        </tr>
        <tr>
          <th>Eye color:</th>
          <td>{props.character.eye_color}</td>
        </tr>
        <tr>
          <th>Skin color:</th>
          <td>{props.character.skin_color}</td>
        </tr>
        <tr>
          <th>Height:</th>
          <td>{props.character.height}</td>
        </tr>
        <tr>
          <th>Mass:</th>
          <td>{props.character.mass}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Character;