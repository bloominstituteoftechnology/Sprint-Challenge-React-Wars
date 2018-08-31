import React from 'react';
import Character from './Character';
 


const CharacterList = props => {
    return (
    <div className = 'idk'>
    {props.starwarsChars.map(character => {
        return(
    <Character
     starwarsCharacter={props.starwarsCharacter.name} 
     character = {character}
     />
    );
})}
</div>
    );
}





export default CharacterList;