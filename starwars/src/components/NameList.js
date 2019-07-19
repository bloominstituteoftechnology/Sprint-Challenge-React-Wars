import React from 'react';
import Name from './Names.js';


 function List(props) {

     return (
        <div>
         <h2>Starwars Characters</h2>
         {props.characters.map (character => {
        return <List key = {character.created} info={character} name ={props.characters.name} />
         })}

         </div>
    )
}

 export default List;