import React from 'react';
import './card.css'
const Card = props =>{
    return (
        <div className = 'card'>
            {props.starwarsChars.map((item)=>{
                return(
                    <div className= "specific-card">
                        <p>Name : {item.name}</p>
                        <p>Birth year: {item.birth_year}</p>
                        <p>Eye color: {item.eye_color}</p>
                        <p>Hair color: {item.hair_color}</p>
                        <p>Height: {item.height}</p>
                        <p>Mass: {item.mass}</p>
                        <p>Gender:{item.gender}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default Card;