import React from "react";
import "./StarWars.css";

const StarWars = props => {
  return (
    <div className="cards">   
      <ul>
      <h2>{props.data.name}</h2>
        <li className="gender">
          Gender: {props.data.gender}
        </li>
        <li>Birth Year: {props.data.birth_year}</li>
        <li>Eye Color: {props.data.eye_color}</li>
        <li>Height: {props.data.height}</li>
      </ul>
    </div>
  )
}

export default StarWars;