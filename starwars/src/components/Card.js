import React from "react";

//Todo
const Card = props => {
    return (
    <div className="myCards">
        <div>
            <h3>{props.thisChar.name}</h3>
        </div>
        <div className = "closed"
            style={ props.thisChar.open ? { display: "block" } : null }>
           <p>Birth year: {props.thisChar.birth_year}</p>
           <p>Gender: {props.thisChar.gender}</p>
           <p>Height: {props.thisChar.height}</p>
           <p>Eye color: {props.thisChar.eye_color}</p>
           <p>Hair Color: {props.thisChar.hair_color}</p>
        </div>
        <button onClick={() => props.handleToggle(props.thisChar.created)}>See Info</button>
    </div>
    );
  };

export default Card;