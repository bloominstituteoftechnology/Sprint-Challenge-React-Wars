import React from 'react';
import './Console.css';
// Display information on target person.

const Console = (props) => {
    // Props:
    // - name       height      mass        hair_color      skin_color
    // - eye_color  birth_year  gender      homeworld       species
    // - star_ships vehicles    films       created         edited
    // - url
    
    return(
        <div className='console'>
            <div>Name: {props.name}</div>
            <div>Height: {props.height}</div>
            <div>Mass: {props.mass}</div>
            <div>Hair Color: {props.hair_color}</div>
            <div>Skin Color: {props.skin_color}</div>
            <div>Eye Color: {props.eye_color}</div>
            <div>Birth Year:{props.birth_year}</div>
            <div>Gender: {props.gender}</div>
            <div>Homeworld: {props.homeworld}</div>
            <div>Species: </div>
            <div>Starships: </div>
            <div>Vehicles: </div>
            <div>Films: </div>
            <div>Created: {props.created}</div>
            <div>Edited: {props.edited}</div>
            <div>URL: {props.url}</div>
        </div>
    );
};

export default Console;