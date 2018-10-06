import React from 'react';
import Card from './Card';

function CardData(props){
    return(
        <div className='card-container'>
            {props.characterData.map(charInfo => 
            <Card 
            charInfo={charInfo} 
            name={charInfo.name} 
            hair_color={charInfo.hair_color}
            gender={charInfo.gender}  
            mass={charInfo.mass} 
            height={charInfo.height}
            skin_color={charInfo.skin_color}
            birth_year={charInfo.birth_year}
            />)}

        </div>
    );
};
export default CardData;