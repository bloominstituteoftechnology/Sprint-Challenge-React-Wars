import React from 'react';
import './StarWars.css';

const CardCharInfo = props => {
  return (
    <div className="char-info__container">

      <div className="char-info__col-1">
      <p className="char-info__item">{`Birth Year: ${props.birthYear}`}</p>
      <p className="char-info__item">{`Gender: ${props.gender}`}</p>
      <p className="char-info__item">{`Eye Color: ${props.eyeColor}`}</p>
      </div>

      <div className="char-info__col-2">
      <p className="char-info__item">{`Skin Color: ${props.skinColor}`}</p>
      <p className="char-info__item">{`hair Color: ${props.hairColor}`}</p>
      <p className="char-info__item">{`Height: ${props.height}`}</p>
      <p className="char-info__item">{`Mass: ${props.mass}`}</p>
      </div>

    </div>
  );
};

export default CardCharInfo;