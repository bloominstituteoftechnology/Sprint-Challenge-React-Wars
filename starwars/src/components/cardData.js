import React from 'react';
import Card from './card';
 function CardData(props){
    return(
        <div className='card-container'>
            {/* Mapping over CharacterData that holds starwarsChars and setting it to a new array
            called charInfo*/}
            {props.characterData.map(charInfo => 
            <Card 
            charInfo={charInfo} 
            name={charInfo.name} 
            gender={charInfo.gender}  
            height={charInfo.height}
            birth_year={charInfo.birth_year}
            />)}

        </div>
    );
};
export default CardData;