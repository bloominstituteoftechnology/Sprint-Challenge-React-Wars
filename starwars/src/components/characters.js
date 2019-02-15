import React from 'react';
import '../App.css';

const DisplayChar = props => {
    return(
        <div
            className='main-content'>
            {props.starwarsChars.map((item, index) => {
    return(
        <div
        key={index}
        className='character'
        >
        <h2>{item.name}</h2>

        <ul>
            <li>birth year: {item.birth_year}</li>
            <li>eye color: {item.eye_color}</li>
            <li>gender: {item.gender}</li>
            <li>hair color: {item.hair_color}</li>
            <li>height: {item.height}</li>
            <li>mass: {item.mass}</li>
            <li>skin color: {item.skin_color}</li>
        </ul>
        </div>
            );
            })}
        </div>
    )
}

export default DisplayChar;