import React from 'react';
// import Character from './Character.js'


const StarWarsList = props => {
   return( 
    <div className="StarWarsList">
     {props.characters.forEach(character => {
       console.log(character)
    })}

    </div>

    )
    
}




export default StarWarsList;