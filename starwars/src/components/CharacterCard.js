import React from 'react';
import CharacterStats from './CharacterStats';

const CharacterCard = (props) => {

    return <div>
                <div><h1>Name: </h1>{props.characters.name} </div>
                    <div>
                    <h6>Birth Year: </h6>{props.characters.birth_year}
                    <h6>Home World: </h6>{props.characters.homeworld}
                    <h6>Gender: </h6>{props.characters.gender}
                    <h6>Height: </h6>{props.characters.height}
                    <h6>Mass: </h6>{props.characters.mass}
                    <h6>Skin Color: </h6>{props.characters.skin_color}
                    <h6>Eye Color: </h6>{props.characters.eye_color}
                    <h6>Hair Color: </h6>{props.characters.hair_color}
                    <h6>Hair Color: </h6>{props.characters.hair_color}
                    <h6>Species: </h6>{props.characters.species}
                    </div>
            </div>
}

export default CharacterCard;