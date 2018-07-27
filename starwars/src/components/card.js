import React from 'react';

const Card = cardProps => {
  return (
    <div className="card-main">
      <h1>{cardProps.name}</h1>
    </div>
  )
}


export default Card;
