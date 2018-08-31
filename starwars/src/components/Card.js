import React from 'react';
import './StarWars.css';

const Card = (props) =>{
    return(
        <div className='character'>
            <div className='name'>
                <h1 className='title'>Name</h1>
                <p className='character-name'>              
                    {props.character.name}
                </p>
            </div>
            <div className='birthday'>
                <h2 className='title'>Born</h2>
                <p className='character-birthday'>
                    {props.character.birth_year}
                </p>
            </div>
            <div className='gender'>
                <h2 className='title'>Gender</h2>
                <p className='character-gender'>
                    {props.character.gender}
                </p>
            </div>
            <div className='description-long'>
                <p>
                    <span className='desc' >Eyes:</span> 
                    {props.character.eye_color}
                </p>
                <p>
                    <span className='desc'>Hair:</span> 
                    {props.character.hair_color}
                </p>
                <p>
                    <span className='desc'>Height:</span> 
                    {props.character.height}cm
                </p>
                <p>
                    <span className='desc'>Weight:</span> 
                    {props.character.mass}kg
                </p>
                <p>
                    <span className='desc'>Skin Color:</span> 
                    {props.character.skin_color}
                </p>
            </div>
        </div>
    )
}

export default Card;