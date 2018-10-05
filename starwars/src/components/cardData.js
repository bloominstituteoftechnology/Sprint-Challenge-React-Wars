import React from 'react';
import Card from './card';
 function CardData(props){
    return(
        <ul>
            {props.characterData.map(charInfo => 
            <Card 
            charInfo={charInfo} 
            name={charInfo.name} 
            gender={charInfo.gender}  
            birthYear = {charInfo.birth_year}
            />)}
        </ul>
    );
};
export default CardData;