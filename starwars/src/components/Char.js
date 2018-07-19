import React from "react";


const Char = props => {
return (
  <div className='box'>
  <h3>{props.swChar.name}</h3>
  <p>Gender: {props.swChar.gender}</p>
  <p>Height: {props.swChar.height}</p>
  <p>Mass: {props.swChar.mass}</p>
  </div>
)
};


export default Char; 