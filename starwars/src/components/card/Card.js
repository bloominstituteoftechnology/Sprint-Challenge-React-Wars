import React from 'react';
import './card.css';

const Card = ( { characters }) => {
  return (
   <div className="card-container">    
      <div className="character-card">
       
          <div className="character__name">{characters.name}</div>
          <div>
            <span className="personal-info__heading">Gender:</span><span>{characters.gender}</span>
          </div>
          <div>
            <span className="personal-info__heading">Height:</span><span>{characters.height}"</span>
          </div>
          <div>
            <span className="personal-info__heading">Mass:</span><span>{characters.mass}</span>
          </div>
          <div>
            <span className="personal-info__heading">Hair Color:</span><span>{characters.hair_color}</span>
          </div>
          <div>
            <span className="personal-info__heading">Eye Color:</span><span>{characters.eye_color}</span>
          </div>
          <div>
            <span className="personal-info__heading">Skin Color:</span><span>{characters.skin_color}</span>
          </div>
          <div>
            <span className="personal-info__heading">BirthYear:</span><span>{characters.birth_year}</span>
          </div>
          </div>
    </div>
     
    
    
  );
}



export default Card;