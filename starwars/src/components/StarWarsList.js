import React from 'react';
import StarWars from './StarWars';

function StarWarsList(props) {
    // console.log(props.characters);
    return (
        <div>
            {props.characters.map( charSW => (
                <StarWars 
                    key={charSW.created}
                    character={charSW}                 
                />
            ))}
        </div>        
    );
}

export default StarWarsList;