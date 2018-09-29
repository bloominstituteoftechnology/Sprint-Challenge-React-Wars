import React from 'react';

const CardInfo = props => {
    console.log(props)
    return (
        <div className='card-info'>
            <div className='card-top-bar'>
                <h2>{props.character.name}</h2>
                <p>Born: <br></br>{props.character.birth_year}</p>
            </div>
            <div className='card-content'>
            <div className='card-left'>
                <p>Gender: {props.character.gender}</p>
                <p>Height: {props.character.height}cm</p>
                <p>Weight: {props.character.mass}kg</p>
            </div>
            <div className='card-right'>
                <p>Skintone: {props.character.skin_color}</p>
                <p>Hair: {props.character.hair_color}</p>
                <p>Eyes: {props.character.eye_color}</p>
            </div>
            </div>
        </div>
    )
}


export default CardInfo;