import React from 'react';
import Bio from './Bios';

const Characters = props => {
    return (
        <div>
   {props.starwarsChars.map(actor =>{
    return <Bio key={actor.id} actor={actor}/>;
   })}        
    </div>);
};

export default Characters;