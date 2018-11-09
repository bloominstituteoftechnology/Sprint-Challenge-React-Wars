import React from 'react';

const Character = (props) => {
    return (
        <div className='char-card'>
            <div className='card-item'>
                <h2 className='char-name'>Name: {props.char.name}</h2>   
                
                <p> <span>Height:</span> {props.char.height}</p>
                <p>Mass: {props.char.mass}</p>
                <p>Hair Color: {props.char.hair_color}</p>
                <p>Skin Color: {props.char.skin_color} </p>
                <p>Eye Color: {props.char.eye_color} </p>
                <p>Birth Year: {props.char.birth_year} </p>
                <p>Gender: {props.char.gender} </p>
                <p>Homeworld: {props.char.homeworld}</p>
                <p className='films'>Films: {props.char.films}</p>
                <p>Species: {props.char.species}</p> 
                <p>Vehicles: {props.char.vehicles}</p>
                <p>Starships: {props.char.starships}</p> 
                <p>Created: {props.char.created}</p> 
                <p>Editied: {props.char.edited}</p> 
                <p>URL: {props.char.url}</p>  
            </div>
        </div>
    );
}


export default Character;