import React from 'react';


const Card = props => {
    return (
        <div className='card-body'>
            <h1>{props.starwarsChars.name}</h1>
        </div>
    );
}
 
export default Card;