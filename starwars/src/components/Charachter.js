import React from "react";
import './StarWars.css';

const Charachter = (props) => {
    return(
        <div className="charachterDiv">
            <h2 onClick={() => props.clickIMG}>{props.char.name}</h2>
            <p>Gender: {props.char.gender}</p>
            <p>Height: {props.char.height}</p>
            <p>Weight: {props.char.mass}</p>
            <p>Skin Color: {props.char.skin_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Eye Color: {props.char.eye_color}</p>
        </div>
    )
}
   

export default Charachter;