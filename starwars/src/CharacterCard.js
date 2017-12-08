import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({element}) => {
    return <div className="card">
        <div className="card__item">
          <div className= "card__content">
          <div className = "card__name"><b> Name : {element.name}</b></div>
          <div className = "card__text">
          <div> Height: {element.height}</div>
          <div> Birth year: {element.birth_year}</div>
        </div>
        </div>
        </div>
      </div>;
}

export default CharacterCard;