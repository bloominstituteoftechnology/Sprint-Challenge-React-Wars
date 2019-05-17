import React from 'react';
import './StarWars.css';

const StarwarsChar = props => {
    return (
        <div className="toon">
            <h4>{props.starwarsChar.name}</h4>
            <div className="stats">
                <div>gender: {props.starwarsChar.gender}</div>
                <div>birthday: {props.starwarsChar.birth_year}</div>
                <div>hair: {props.starwarsChar.hair_color}</div>
                <div>eyes: {props.starwarsChar.eye_color}</div>
                <div>height: {props.starwarsChar.height}</div>
                <div>weight: {props.starwarsChar.mass}</div>
            </div>
        </div>
    )
}

export default StarwarsChar;