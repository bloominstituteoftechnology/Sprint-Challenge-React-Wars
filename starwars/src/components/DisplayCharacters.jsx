import React from 'react';

const DisplayCharacter = (props) => {
   return(
      <div className='card-list-container'>
         <ul className='card-list-ul'>
            <h1 className='name'>{props.characterProps.name}</h1>
            <h3 className='traits'>Born: {props.characterProps['birth_year']}</h3>
            <h3 className='traits'>Height: {props.characterProps.height}</h3>
            <h3 className='traits'>Mass: {props.characterProps.mass}</h3>
            <h3 className='traits'>Skin Color: {props.characterProps['skin_color']}</h3>
            <h3 className='traits'>Hair Color: {props.characterProps['hair_color']}</h3>
            <h3 className='traits'>Eye Color: {props.characterProps['eye_color']}</h3>
         </ul>
      </div>
   )
}

export default DisplayCharacter;