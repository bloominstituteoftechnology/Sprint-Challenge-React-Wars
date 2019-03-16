import React from 'react';

import Characters from "./Characters"

const Card = props =>{
    return (
       <div className="container">
        {props.characters.map(character =>(
        <Characters characters={character} />
     )
     )} 
     </div>
    )
}

export default Card;