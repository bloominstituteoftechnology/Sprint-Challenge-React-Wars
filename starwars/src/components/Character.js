import React from 'react';

const Character = props => {
    return 
    <div className='cards'>
        <p>Name:{props.starwarsCharacter.name}</p>
        {/* <p>Height:{props.starwarsCharacter.height}</p>
        <p>Mass:{props.starwarsCharacter.mass}</p>
        <p>Hair-Color:{props.starwarsCharacter.hair_color}</p>
        <p>Skin-Color:{props.starwarsCharacter.skin_color}</p>
        <p>Eye-Color:{props.starwarsCharacter.eye_color}</p>
        <p>Birth-Year:{props.starwarsCharacter.birth_year}</p>
        <p>Gender:{props.starwarsCharacter.gender}</p> */}
    </div>;
};

export default Character;

