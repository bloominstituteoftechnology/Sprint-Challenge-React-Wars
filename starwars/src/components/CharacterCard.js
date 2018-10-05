import React from 'react';
import './CharacterCard.css';

const CharacterCard = (props) => {
    return(
        <div className='cards'>
            <div className='card'>
                {/* <h2>{props.character.age}</h2> */}
                <h2>{props.character.name}</h2>
                <div className='stats'>
                    <h2>Gender: {props.character.gender}</h2>

                </div>
            </div>
        </div>    
    )
}



export default CharacterCard;