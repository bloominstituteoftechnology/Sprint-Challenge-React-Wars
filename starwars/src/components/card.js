import React from 'react';

let Card = props => {
    return (
        <div className='card'>
            {/* The following displays the character's name */}
            <h2>{props.char.name}</h2>
            {/* The following two lines display gender, birth year, height, and weight. Ternary functions are used to handle data returned unknown or n/a */}
            <p>A {props.char.gender === 'n/a' || props.char.gender === 'none' ? 'robot created' : props.char.gender + ' born'} in {props.char.birth_year === 'unknown' ? 'an unknown year' : props.char.birth_year}.</p>
            <p>{props.char.name} is {props.char.height === 'unknown' ? 'an unknown height' : props.char.height + 'cm tall'} and weighs {props.char.mass === 'unknown' ? 'an unknown amount' : props.char.mass + 'kg'}.</p>
                {/* I tried to make the following its own component but the API call started crashing for some reason */}
            <ul className="physicalTraits"> 
                <li>Hair Color: {props.char.hair_color === 'n/a' ? 'none' : props.char.hair_color}</li>
                <li>Eye Color: {props.char.eye_color}</li>
                <li>Skin Color: {props.char.skin_color}</li>
            </ul>
        </div>
    )
}

export default Card;