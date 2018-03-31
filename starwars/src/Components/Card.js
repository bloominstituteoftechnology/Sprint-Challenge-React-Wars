import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div>
            {props.starwarsChars.map((starwarsChar, index) => {
                return (
                    <div key={index} className = 'container'>
                        <div className = 'first'> { starwarsChar.name}</div>
                        <div className = 'birth'>{starwarsChar.birth_year}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;