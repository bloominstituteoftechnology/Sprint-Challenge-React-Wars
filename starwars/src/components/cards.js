import React from 'react';
import './StarWars.css';

const Stats = (props) => {
    return(
        <div className='info'>
        <h2>{props.info.name}</h2>
        <ul>
            <li><h3>Birth Year:</h3> {props.info.birth_year}</li>
            <li><h3>Gender:</h3> {props.info.gender}</li>
            <li><h3>Height:</h3> {props.info.height}</li>
            <li><h3>Mass:</h3> {props.info.mass}</li>
            <li><h3>Hair Color:</h3> {props.info.hair_color}</li>
            <li><h3>Eye Color:</h3> {props.info.eye_color}</li>
            <li><h3>Skin Color:</h3> {props.info.skin_color}</li>
        </ul>
        </div>
    );
};

export default Stats;
