import React from "react";

const ContentCard = props => {
    return(
        <div className = "content">
            <h3><strong>Name:</strong> {props.name}</h3>
            <p><strong>Birth Year:</strong> {props.birthYear}</p>
            <p><strong>Eye color:</strong> {props.eyeColor}</p>
            <p><strong>Hair color:</strong> {props.hair}</p>
            <p><strong> Height:</strong> {props.height}</p>
            <p><strong> Mass:</strong> {props.mass}</p>
            <p><strong> Created:</strong> {props.created}</p>
            <p><strong> Edited:</strong> {props.edited}</p>
            <p><strong> Gender:</strong> {props.gender}</p>
            <p><strong> Homeworld:</strong> {props.homeworld}</p>
        </div>
    )
}
export default ContentCard; 