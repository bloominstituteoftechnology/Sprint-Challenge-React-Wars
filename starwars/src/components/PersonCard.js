import React from 'react';


const PersonCard = (props) => {
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
        </div>
    )
} 
export default PersonCard;
