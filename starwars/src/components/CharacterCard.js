import React from 'react';
import './StarWars.css';

  


const CharacterCard = props=> {
    return (
        <div className='cards'>
           <ul className='card-content'>
            <h1 className='name'>{props.characterProps.name}</h1>
            <h3 className='stats'>Born: {props.characterProps['birth_year']}</h3>
            <h3 className='stats'>Height: {props.characterProps.height}</h3>
            <h3 className='stats'>Mass: {props.characterProps.mass}</h3>
            <h3 className='stats'>Skin Color: {props.characterProps['skin_color']}</h3>
            <h3 className='stats'>Hair Color: {props.characterProps['hair_color']}</h3>
            <h3 className='stats'>Eye Color: {props.characterProps['eye_color']}</h3>
           </ul>
         </div>
    );
}

export default CharacterCard;