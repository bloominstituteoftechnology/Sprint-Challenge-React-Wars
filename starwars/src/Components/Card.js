import React from 'react';

const Card = (props) => {

    return (
        <div>{props.starwarsChars.map((starwarsChar, index) => {
            return (
                <div key={index} className = 'container'>
                    <div className = 'first'> { starwarsChar.name}</div>
                </div>
            )
        })}
        </div>
    )
}

export default Card;