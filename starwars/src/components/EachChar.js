import React from 'react';
import './StarWars.css';

const EachChars = props => {
    return (
        <div className='page'>
            <div className='card'>
                <h1 className='Header charHeader'>{props.character.name}</h1>
                <div class='list'>
                    <p>Height: {props.character.height}</p>
                    <p>Mass: {props.character.mass}</p>
                    <p>Hair Color: {props.character.hair_color}</p>
                    <p>Skin Color: {props.character.skin_color}</p>
                    <p>Eye Color: {props.character.eye_color}</p>
                    <p>Birth Year: {props.character.birth_year}</p>
                    <p>Gende: {props.character.gender}</p>
                    <div className='return' onClick={props.backToList}>Return</div>
                </div>
            </div>
            
        </div>
    )
}

export default EachChars;