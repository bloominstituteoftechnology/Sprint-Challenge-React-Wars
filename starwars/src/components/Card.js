import React from 'react';

const Card = ({ character }) => {
  return (
    <div className="Card">
      <header className="Card-Header">
        <h2 className="Card-Title">{character.name}</h2>
      </header>
      <div className="Card-Body">
        <h3>Stats</h3>
        <ul className="Card-List">
          <li className="Card-Item">
            <span className="Card-Key">Date of Birth:</span>
            {character.birth_year}
          </li>
          <li className="Card-Item">
            <span className="Card-Key">Height:</span>
            {character.height}
          </li>
          <li className="Card-Item">
            <span className="Card-Key">Mass:</span>
            {character.mass}
          </li>
          <li className="Card-Item">
            <span className="Card-Key">Hair Color:</span>
            {character.hair_color}
          </li>
          <li className="Card-Item">
            <span className="Card-Key">Skin Color:</span>
            {character.skin_color}
          </li>
          <li className="Card-Item">
            <span className="Card-Key">Eye Color:</span>
            {character.eye_color}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
