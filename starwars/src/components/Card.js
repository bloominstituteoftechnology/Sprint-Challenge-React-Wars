import React from 'react';
import '../components/StarWars.css';




const Card = (props) => {
    
    
    return(
        <div>
            {props.value.name}
            {props.value.gender}
            {props.value.birth_year}
            {props.value.height}
            {props.value.mass}
            {props.value.hair_color}
            {props.value.eye_colors}
            {props.value.skin_color}
            {props.value.created}
            {props.value.edited}
            

        </div>

    )
}

export default Card;