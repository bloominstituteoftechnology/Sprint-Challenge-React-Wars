import React from 'react';

import Characters from "./Characters"

const Card = (props) =>{
    return (
        <section>
     {props.characters.map(character =>(
        <div className="card">Characters caracters={character} /> </div>
     )
     )} 
     </section>
    )
}

export default Characters;