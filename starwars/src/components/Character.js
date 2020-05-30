// Write your Character component here
import React from 'react';
import { Cards } from './styles'


export default (people) => {
    console.log({people});
    return (
        <Cards>
            
            <h1>{people.characters}</h1>
            <p>{people.height}</p>
            <p>{people.birth_year}</p>
            <p>{people.eye_color}</p>
        </Cards>
    )
}