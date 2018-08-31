import React from 'react';
import './Characters.css';

function Characters(props){
    return(
            <div className="card">
                <div className="card-content">
                    <h2>{props.starchar.name}</h2>
                    <h4>Gender: {props.starchar.gender}</h4>
                    <h4>Height: {props.starchar.height}</h4>
                    <h4>Mass: {props.starchar.mass}</h4>
                    <h4>Hair Color: {props.starchar.hair_color}</h4>
                    <h4>Birth Year: {props.starchar.birth_year}</h4>
                </div>
            </div>
    )
}

export default Characters;