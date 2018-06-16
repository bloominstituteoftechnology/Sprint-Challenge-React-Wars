import React from 'react';
import './Card.css';
import CardBio from './CardBio';
import CardSummary from './CardSummary';
const CardContainer = (props) => {
    return (

        <div className='card-container'>

            {/* Card Bio Section */}
            <CardBio name={props.character.name} 
            gender={props.character.gender} 
            eye_color={props.character.eye_color}
            height={props.character.height}
            hair_color={props.character.hair_color} />


            {/* Card Summary Section */}
            <CardSummary 
            name = {props.character.name}
            born = {props.character.birth_year} 
            created = {props.character.created}
            films = {props.character.films}
            homeworld = {props.character.homeworld}
            />

            
        </div>
    );
}

export default CardContainer;