import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div>
            {props.starwarsChars.map((starwarsChar, index) => {
                return (
                    <div key={index} className = 'container'>  
                        <div className = 'first'> NAME: { starwarsChar.name}</div>
                        <div className = 'gender'>HEIGHT: {starwarsChar.height}
                        </div>
                        <div className = 'gender'>HAIR: {starwarsChar.hair_color}
                        </div>
                        <div className = 'species'>EYE: {starwarsChar.eye_color}
                        </div>
                        <div className = 'species'>WEIGHT: {starwarsChar.mass}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;