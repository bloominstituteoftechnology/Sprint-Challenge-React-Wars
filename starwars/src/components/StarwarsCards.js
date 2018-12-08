import React from 'react';
import './StarWars.css';
import CharacterCard from './CharacterCard';

const StarWarsCards = props =>{
    return(
        <div className="cards_container">
            <ul>
                {props.characters.map((props) => <CharacterCard key={props.created} name={props.name}
                    gender={props.gender}
                    birth_year={props.birth_year}
                    hair_color={props.hair_color}
                    eye_color={props.eye_color}
                    />)}
            </ul>
        </div>
    )
}

export default StarWarsCards;