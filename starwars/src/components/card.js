import React from 'react';

let Card = props => {
    return (
        <div className='card'>
            <h2>{props.char.name}</h2>
            <p>A {props.char.gender === 'n/a' ? 'robot created' : props.char.gender + ' born'} in {props.char.birth_year === 'unknown' ? 'an unknown year' : props.char.birth_year}.</p>
            <div className='traits'>
                <p>{props.char.name} is {props.char.height}cm tall and weighs {props.char.mass === 'unknown' ? 'an unknown amount' : props.char.mass + 'kg'}.</p>
                <ul className="physicalTraits">
                    <li>Hair Color: {props.char.hair_color === 'n/a' ? 'none' : props.char.hair_color}</li>
                    <li>Eye Color: {props.char.eye_color}</li>
                    <li>Skin Color: {props.char.skin_color}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card;