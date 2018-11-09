import React from 'react';
import Characters from './Characters'


const CharacterList = props => {
    return (
    <div>
    {props.starwarsChars.map( roles => (
    <Characters key = {roles.name}
     charProps= {roles}/> 
    ))}
    </div>
    
    );
    
};

export default CharacterList;