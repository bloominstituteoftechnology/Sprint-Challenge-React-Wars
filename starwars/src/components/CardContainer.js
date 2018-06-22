import React from 'react';
import Card from './card';


const CardContainer = props => {
    return (
        <div className='card-container'>
            {props.starwarsChars.map( char => {
                return (
                    <Card
                        starwarsChar={char}
                    />
                );
            })}
        </div>
    );
}
 
export default CardContainer;