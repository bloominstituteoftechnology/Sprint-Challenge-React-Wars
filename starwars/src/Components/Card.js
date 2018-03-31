import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div>
            {props.starwarsChars.map((starwarsChar, index) => {
                return (
                    <div key={index} className = 'container'>
                        <div className = 'first'> { starwarsChar.name}</div>
                        <div className = 'gender'>height: {starwarsChar.height} cm
                        </div>
                        <div className = 'gender'>hair: {starwarsChar.hair_color}
                        </div>
                        <div className = 'species'>eyes: {starwarsChar.eye_color}
                        </div>
                        <div className = 'species'>mass: {starwarsChar.mass} kg
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;