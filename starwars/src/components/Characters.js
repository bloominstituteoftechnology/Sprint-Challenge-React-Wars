import React from 'react';
import CharacterProfile from "./components/CharacterProfile";

const Characters = (props) => {

    return (
        character.map(characters => {

            return (  
                <CharacterProfile
                    name={characters.name}
                    height={characters.height}
                    mass={characters.mass}
                    hair_color={characters.hair_color}
                    skin_color={characters.skin_color}
                    eye_color={characters.eye_color}
                    birth_year={characters.birth_year}
                    gender={characters.gender}
                    homeworld={characters.homeworld}
                />    
            )
        }    
    )
}    


export default Characters;