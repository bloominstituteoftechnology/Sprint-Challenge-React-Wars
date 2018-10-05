import React from 'react';

const EachChars = props => {
    return (
        <div className='page'>
            <div className='card'>
                <h1 className='Header charHeader'>{props.character.name}</h1>
                <ol>
                    <li>Name: {props.character.name}</li>
                    <li>Height: {props.character.height}</li>
                    <li>Mass: {props.character.mass}</li>
                    <li>Hair Color: {props.character.hair_color}</li>
                    <li>Skin Color: {props.character.skin_color}</li>
                    <li>Eye Color: {props.character.eye_color}</li>
                    <li>Birth Year: {props.character.birth_year}</li>
                    <li>Gende: {props.character.gender}</li>
                </ol>
            </div>
            <div className='return' onClick={props.backToList}>Return</div>
        </div>
    )
}

export default EachChars;