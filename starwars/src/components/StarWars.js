import React from 'react';
import './StarWars.css';

const Starwars = (props) => {
    return (
        <div>
             <div className = 'box'>
            {props.starwarsChars.map((info, index) => {
                return (
                   
                    <div className = 'character-info'>
                        <h2 key={index}>{info.name}</h2>
                        <p key={index}>Birth Year: {info.birth_year}</p>
                        <p key={index}>Eye Color: {info.eye_color}</p>
                        <p key={index}>Hair Color: {info.hair_color}</p>
                        <p key={index}>Skin Color: {info.skin_color}</p>
                        <p key={index}>Birth Year: {info.birth_year}</p>
                        <p key={index}>Gender: {info.gender}</p>
                        <p key={index}>Height: {info.height}</p>
                        <p key={index}>Mass: {info.mass}</p>
                    </div>
                    
                    
                )
            })}
          </div>
        </div>
    )
}
export default Starwars;