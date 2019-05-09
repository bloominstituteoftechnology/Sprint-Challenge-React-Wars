import React from 'react';
import './Character.css';
  const Character = (props) => {
      console.log(props, "char");
      return (
        <div className = "card-wrapper">
            <div className ="card">
                <h2>{props.char.name}</h2>
                <p>Eye Color: {props.char.eye_color}</p>
                <p>Hair color: {props.char.hair_color}</p>
                <p>Gender: {props.char.gender}</p>
                <p>Mass: {props.char.mass}kg</p>
                <p>Height: {props.char.height}cm</p>
                <p>Birth Year: {props.char.birth_year}</p>
            </div>
        </div>
      );
  };
  export default Character;