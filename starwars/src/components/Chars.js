import React from "react";
import './card.css';

const Chars = props => {
  return (
    <div className="card" >
      <div className="title">
        {props.name.name}
      </div>
      <div className='stats'>
        {props.name.gender}
        {" "}
        {props.name.birth_year}</div>

  </div>);
};

export default Chars;
