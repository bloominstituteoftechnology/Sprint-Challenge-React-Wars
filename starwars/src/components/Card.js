import React from 'react';
import './StarWars.css';
import Films from './Films';
import Species from './Species';
import Flippy, {FrontSide, BackSide } from 'react-flippy';

const Card = props => {
  const character = props.character;
  return (
    <Flippy
      flipOnHover={true}
      ref={(r) => this.flippy = r}
    >
    <FrontSide style={{border: '1px solid black', 'border-radius': '10px', margin: '10px', width: '400px', height: '800px', background: 'black', color: 'white', 'line-height': '800px', 'font-size': '2rem' }} className="FrontSide">
      {character.name}
    </FrontSide>
    <BackSide style={{width: '400px', height: '800px', color: 'white',
      background: 'rgba(5,5,5,0.7)',
      'border-radius':'10px' }}>
        <h1> {character.name} </h1>

        <h2> Profile: </h2>
        <p> <span>Birth Year:</span> {character.birth_year}</p>
        <p> <span>Gender:</span> {character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}</p>
        <p> <span>Height:</span> {character.height}</p>
        <p> <span>Eye Color:</span> {character.eye_color.charAt(0).toUpperCase() + character.eye_color.slice(1)}</p>
        <p> <span>Hair Color:</span> {character.hair_color.charAt(0).toUpperCase() + character.hair_color.slice(1)}</p>
        <p> <span>Skin Color:</span> {character.skin_color.charAt(0).toUpperCase() + character.skin_color.slice(1)}</p>
        <p><span>Mass:</span> {character.mass}</p>
        <div className="species">
          {character.species.map((res, index) => (
            <Species
              key={index}
              species = {res} />
          ))}
        </div>

        <h1> Films</h1>

        <div className="FilmList">
          {character.films.map((film,index) =>(
            <Films
            key = {index}
            film= {film} />
          ))}
        </div>
    </BackSide>

    </Flippy>

  );
}

export default Card;
