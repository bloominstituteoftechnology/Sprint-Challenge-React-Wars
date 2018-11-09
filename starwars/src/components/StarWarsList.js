import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';


const StarWarsList = props => { 
    return (
        <div>
            {props.starWarsList.map((character) => 
                <StarWarsCharacter character={character} />
            )}
            
        </div>
    )
};

export default StarWarsList;