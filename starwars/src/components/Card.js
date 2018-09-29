import React from 'react';
import '../components/StarWars.css';




const Card = (props) => {
    
    
    return(
        <div>
            {props.value.name}
        </div>

    )
}

export default Card;