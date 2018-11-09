import React from 'react';
import StarWars from './StarWars';

function StarWarsList(props) {
    // console.log(props.characters);
    return (
        <div className='character-cards'>
            {props.characters.map( charSW => (
                <StarWars 
                    key={charSW.created}
                    character={charSW}  
                    isDisplayed={charSW}               
                />
            ))}
        </div>        
    );
}

export default StarWarsList;