import  React  from "react";
import React from "react";

function Character(props) {
  return (
    <div className="character-card">
      <div className="character-info">
        <h3>{props.char.name}</h3>
        <p>
          <strong>Height:</strong> {props.char.height}
        </p>
        <p>
          <strong>Mass:</strong> {props.char.mass}
        </p>
        <p>
          <strong>Hair Color:</strong> {props.char.hair_color}
        </p>
        <p>
          <strong>Birth Year:</strong> {props.char.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {props.char.gender}
        </p>
      </div>
    </div>
  );
}

export default Character;















































/*const Character = props => {
  return(
    <div className="Character container">
      <div className="row">
        <div className="nine columns">
          <h3>{props.character.name}</h3>
          <p>Birth Year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Hair Color: {props.character.hair_color}</p>
          <p>Height: {props.character.height}</p>
          <p>Mass: {props.character.mass}</p>
          <p>Skin Color: {props.character.skin_color}</p>
          <p>Eye Color: {props.character.birth_year}</p>
          <ul>
            {props.character.films.map(film => (
              <li film={film}>{`Films: ${film}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Character*/
