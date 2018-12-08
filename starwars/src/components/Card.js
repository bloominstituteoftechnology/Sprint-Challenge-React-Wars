import React from 'react';

import Characters from "./Characters"

const Card = (props) =>{
    return (
        <section>
     {props.characters.map(character =>(
        <div className="card"><Characters characters={character} /> </div>
     )
     )} 
     </section>
    )
}

export default Card;