import React from 'react'
import './cardContainer.css'

const Card = ({char: {name, height, mass, eye_color, hair_color, skin_color, birth_year, created, edited}}) => {
    return (
         <div className="cardList">
         <h1>Character Card:</h1>
           <p><strong>Name:</strong> {name}</p> 
           <p><strong> Height:</strong> {height}</p>
           <p><strong> Mass:</strong> {mass}</p>
           <p><strong> Eye Color:</strong> {eye_color}</p>
           <p><strong> Hair Color:</strong> {hair_color}</p>
           <p><strong> Skin Color:</strong> {skin_color}</p>
           <p><strong> Birth Year:</strong> {birth_year}</p>
           <p><strong> Created:</strong> {created}</p>
           <p><strong> Edited:</strong> {edited}</p>
        </div>
    )
}

export default Card;