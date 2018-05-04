import React from 'react';
import './Characters.css';
import Bio from './Bios';

const Characters = props => {
    return (
        <div className="Chars-wrapper">
   {props.starwarsChars.map(actor =>{
    return <Bio key={actor.id} actor={actor}/>;
   })}        
    </div>);
};

export default Characters;