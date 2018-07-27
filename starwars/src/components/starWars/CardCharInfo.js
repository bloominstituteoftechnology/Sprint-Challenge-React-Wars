import React from 'react';
import './StarWars.css';

const CardCharInfo = props => {
  return (
    <div className="char-info__container">

      <div className="char-info__col-1">
        <p className="char-info__item"><span>Birth Year:</span>{` ${props.birthYear}`}</p>
        <p className="char-info__item"><span>Gender:</span>{` ${props.gender}`}</p>
        <p className="char-info__item"><span>Height:</span>{` ${props.height}`}</p>
        <p className="char-info__item"><span>Mass:</span>{` ${props.mass}`}</p>
      </div>

      <div className="char-info__col-2">
        <p className="char-info__item"><span>Hair Color:</span>{` ${props.hairColor}`}</p>
        <p className="char-info__item"><span>Eye Color:</span>{` ${props.eyeColor}`}</p>
        <p className="char-info__item"><span>Skin Color:</span>{` ${props.skinColor}`}</p>
      </div>

    </div>
  );
};

export default CardCharInfo;