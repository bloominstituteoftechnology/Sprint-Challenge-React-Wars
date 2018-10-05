import React from 'react'
import './cardContainer.css'

const Card = props => {
    return (
         <div className="cardList">
         <h1>Character Card:</h1>
           <p><strong>Name:</strong> {props.swItem.name}</p>
           <p><strong> Gender:</strong> {props.swItem.gender}</p>
           <p><strong> Height:</strong> {props.swItem.height}</p>
           <p><strong> Mass:</strong> {props.swItem.mass}</p>
           <p><strong> Eye Color:</strong> {props.swItem.eye_color}</p>
           <p><strong> Hair Color:</strong> {props.swItem.hair_color}</p>
           <p><strong> Skin Color:</strong> {props.swItem.skin_color}</p>
           <p><strong>  Species:</strong> {props.swItem.species}</p>
           <p><strong> Birth Year:</strong> {props.swItem.birth_year}</p>
           <p><strong> Home World:</strong> {props.swItem.homeworld}</p>
           <p><strong> Vehicles:</strong> {props.swItem.vehicles}</p>
           <p><strong> Starships:</strong> {props.swItem.starships}</p>
           <p><strong> Created:</strong> {props.swItem.created}</p>
           <p><strong> Edited:</strong> {props.swItem.edited}</p>
           <p><strong> Films:</strong> {props.swItem.films}</p>
           <p><strong> URL:</strong> {props.swItem.url}</p>
        </div>
    )
}

export default Card;