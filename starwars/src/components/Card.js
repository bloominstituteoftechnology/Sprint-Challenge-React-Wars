import React from "react";


const Card = props => {
    return (
    <div className="myCards">
        <div>
            <h3>{props.thisChar.name}</h3>
        </div>
        <div 
            style={ props.thisChar.open ? { display: "block" } : null }>
           <p className='birth'>Birth year: {props.thisChar.birth_year}</p>
           <p Gender className="gender">Gender: {props.thisChar.gender}</p>
           <p className='height'>Height: {props.thisChar.height}</p>
           <p className='eye'>Eye Color: {props.thisChar.eye_color}</p>
           <p className ='hair'>Hair Color: {props.thisChar.hair_color}</p>
        </div>
        <button >Info</button>
    </div>
    );
  };

export default Card;