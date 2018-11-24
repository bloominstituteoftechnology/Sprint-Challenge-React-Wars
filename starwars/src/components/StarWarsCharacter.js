import React from 'react';

function StarWarsCharacter(props) {
    console.log('props', props.character)
    return (
        <div className='wrapper'>
            <h1>{props.character.name}</h1>
            <div className='character-attributes'>
                <div className='attribute-name'>
                    <p>Height:</p>
                    <p>Hair color:</p>
                    <p>Eye color:</p>
                </div>
            </div>
            <div className='attributes'>
                <p>{props.character.height}</p>
                <p>{props.character.hair_color}</p>
                <p>{props.character.eye_color}</p>
            </div> 
        </div>
    );
}

export default StarWarsCharacter;