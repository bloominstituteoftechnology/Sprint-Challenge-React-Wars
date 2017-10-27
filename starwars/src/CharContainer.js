import React from 'react';
import './CharContainer.css';

const CharContainer = (props) => {
  return (
    <div className="CharContainer">
      {props.chars.map((char) => {
        return (
          <div className="Char">
            <h3>{char.name}</h3>

            <div className="Details">
              <dl>
                <dt>Gender: {char.gender}</dt>
                <dt>Birth Year: {char.birth_year}</dt>
                <dt>Hair Color: {char.hair_color}</dt>
                <dt>Eye Color: {char.eye_color}</dt>
                <dt>Height: {char.height}</dt>
                <dt>Mass: {char.mass}</dt>
              </dl>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default CharContainer;