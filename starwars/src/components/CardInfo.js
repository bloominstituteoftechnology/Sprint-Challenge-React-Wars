import React from 'react';
import './StarWars.css';

const CardInfo = props => {
    let {name, birth_year, eye_color, hair_color, height, gender, starships} = props.character;

    return (
        <div className="cards">
        <div className="characters">
          <h1>{name}</h1>

          <div>
            <h2>{gender}</h2>
            <h2>{birth_year}</h2>     
          </div>

          <div>
          <h2>{hair_color}</h2>
          <h2>{eye_color}</h2>
          <h2>{height}</h2>  
          <h2>{starships}</h2>        .
          </div>

        </div>
        </div>
        )
}

export default CardInfo;