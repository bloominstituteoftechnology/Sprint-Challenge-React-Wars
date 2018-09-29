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
            <h2>{props.name}</h2>
            <div className='charRow'>
                <div>Gender: {props.gender}</div>
                <div>Birth Year:{props.birth_year}</div>
                <div>Height: {props.height}</div>
                <div>Mass: {props.mass}</div>
            </div>
            <div className='charRow'>
                <div>Hair Color: {props.hair_color}</div>
                <div>Skin Color: {props.skin_color}</div>
                <div>Eye Color: {props.eye_color}</div>
                <div>Species: </div>
            </div>
            <div className='charRow'>Homeworld: {props.homeworld}</div>
            <div className='charRow'>Starships: </div>
            <div className='charRow'>Vehicles: </div>         
            <div className='charRow'>Films: </div>
            <div className='charRow'>
                <div>Created: {props.created}</div>
                <div>Edited: {props.edited}</div>
            </div>
            <div className='charRow'>URL: {props.url}</div>
        </div>
    );
};

export default Console;