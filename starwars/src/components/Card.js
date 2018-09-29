import React from "react";

const Card = (props) =>{
    return(
        <div>
            <p>{props.name}</p>
            <button>Open</button>
            <ul>
                <li>Born: {props.birth_year}</li>
                <li>Eye Color: {props.eye_color}</li>
                <li>Gender: {props.gender}</li>
                <li>Hair Color: {props.hair_color}</li>
                <li>Height: {props.height}</li>
            </ul>
        </div>
    )
}

export default Card;