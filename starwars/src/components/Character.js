import React from 'react';

function Character(props) {
    return (
        <div className='star-card'>
            <div className='star-info'>
                <h3>{props.char.name}</h3>
                <p>
                    <strong>Gender: </strong> {props.char.gender}
                </p>
                <p>
                    <strong>Birth Year: </strong> {props.char.birth_year}
                </p>
                <p>
                    <strong>Mass: </strong> {props.char.mass}
                </p>
                <p>
                    <strong>Eye Color: </strong> {props.char.eye_color}
                </p>
            </div>
        </div>
    );
}

export default Character;