import React from 'react';
import { imgs } from '../img'

const CharCard = ({char, ind}) => {
    return ( 
        <div className='char-card'>
        <img src={imgs[ind]} alt='Jar Jar Binks' className='img'/>
            <div className='info'>
                <div className='overview'>Overview
                    <h2 className='feature'>Name: {char.name}</h2>
                    <h2 className='feature'>Gender: {char.gender}</h2>
                    <h2 className='feature'>Birthyear: {char.birth_year}</h2>
                    <h2 className='feature'>Number of films: {char.films.length}</h2>
                </div>
                <div className='appearance'>Appearance
                    <h2 className='feature'>Mass: {char.mass}kg</h2>
                    <h2 className='feature'>Eye color: {char.eye_color}</h2>
                    <h2 className='feature'>Hair color: {char.hair_color}</h2>
                    <h2 className='feature'>Skin color: {char.skin_color}</h2>
                </div>
            </div>
        </div>
    )
}

export default CharCard;