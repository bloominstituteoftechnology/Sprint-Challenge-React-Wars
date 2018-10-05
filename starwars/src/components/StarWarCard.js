import React from 'react'
import './StarWars.css';
const StarWarCard = (props) => {
    return (
        <div className="star-wars">
            Name: {props.char.name},
            Height: {props.char.height},
            Gender: {props.char.gender},
            Hair Color: {props.char.hair_color},
            Birth Year: {props.char.birth_year}
        </div>
    )
}

export default StarWarCard;