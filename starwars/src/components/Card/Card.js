import React from 'react';
import CharacterProperty from '../CharacterProperty/CharacterProperty';
import './Card.css';

const Card = (props) => {
  return (
    <div className="CardContainer">
      {
        props.data.map((data) => {

          const characterName = data.name.split("_").map((part) => {
            return part.charAt(0).toUpperCase() + part.slice(1);
          }).join(" ")
          
          return (
            <div className="Card Character">
              <div className="CharacterName">{ characterName }</div>
              <CharacterProperty data={data} />
            </div>
          );
          
        })
      }
    </div>
  );

}

export default Card;