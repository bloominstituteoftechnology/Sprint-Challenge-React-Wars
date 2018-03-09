import React from 'react';
//import StarCharsList from './StarCharsList';
import './StarCard.css';

const StarCard = props => {
    return (
        <div className="StarCard">
        <p>Name: {props.person.name}</p>
        <p>Birth Year: {props.person.birth_year}</p>
        <p> Gender: {props.person.gender}</p>
        <p>Eye Color: {props.person.eye_color}</p>
        <p>Hair Color: {props.person.hair_color}</p>
        </div>
    );
};

export default StarCard;