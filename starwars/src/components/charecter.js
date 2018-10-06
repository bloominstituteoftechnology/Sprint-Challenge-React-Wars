import React from 'react';
import './StarWars.css'

const Charecter = props => {
    return (
        <div className='containerAll'>
            {props.data.map(item => {
                return (
                <div className='containerCard'>
                <h2>{item.name}</h2>
                <p className='colorKey'>Birth year: {item.birth_year}</p>
                <p className='colorKey'>Gender: {item.gender}</p>
                <p className='colorKey'>Eye color: {item.eye_color}</p>
                <p className='colorKey'>Skin color: {item.skin_color}</p>
                <p className='colorKey'>Height: {item.height}</p>
                <p className='colorKey'>Mass: {item.mass}</p>
                <p className='colorKey'>Created: {item.created}</p>
                <p className='colorKey'>Edited: {item.edited}</p>
                </div>)
            })}
        </div>
    )
}

export default Charecter;