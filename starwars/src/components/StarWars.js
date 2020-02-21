import React from 'react';
import StarWarsCard from './StarWarsCard';

let StarWars = (props) => {
    console.log('from StarWars', props.swData)
    return (
        <div>
            {props.swData.map((person, index) => (
               <StarWarsCard
               key = {index}
               name = {person.name}
               height = {person.height}
               mass = {person.mass}
               gender = {person.gender}
               birth = {person.birth_year}
               /> 
            ))}
        </div>
    )
}

export default StarWars;

