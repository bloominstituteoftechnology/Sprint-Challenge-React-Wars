import React from 'react';
import Character from './Character';


const CharacterMap = props => {
   return(
       <div className="characterMap">
        {props.characters.map((character, index) => 
            <Character id={index} character={character} />
        )}

       </div>
   ) 

}

export default CharacterMap;