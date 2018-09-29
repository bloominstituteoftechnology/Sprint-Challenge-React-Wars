import React from 'react'
import './card.css';


const CardName = props => {
    return (
      <div className="cardNameTitle">
        {props.title.map(function(el){
          return <h1>{el}</h1>
        })}
      </div>
    );
  };

export default CardName