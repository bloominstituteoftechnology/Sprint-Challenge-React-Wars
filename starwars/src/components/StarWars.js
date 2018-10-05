import React from 'react';
import CharacterCard from './CharacterCard';


const StarWarsContainer = (props) => {
    return(
        <div className='characterList'>
        {props.characters.map(char => {
            return(
                <CharacterCard character={char}
                key={char.created} />
            )
        })}
        </div>
    );
};

export default StarWarsContainer;