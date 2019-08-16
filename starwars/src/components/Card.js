import React from "react";


const Card = props => {
 
  return (
    <div className="card "  key={props.url}>
      <h2>{props.name}</h2>
      <p>Birth Date: {props.birthday}</p>
      <p>Homeworld: {props.homeworld}</p>
      </div>
    
  );
};
export default Card;