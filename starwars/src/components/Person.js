import React from 'react';
import './StarWars.css';

const Person = props => {
    return (
        <div className="cards">
            <h2>{props.attrib.name}</h2>
            <p>Height: {props.attrib.height}</p>
            <p>Gender: {props.attrib.gender}</p>
            <p>Eye-Color: {props.attrib.eye_color}</p>
            <p>Hair-Color: {props.attrib.hair_color}</p>
        </div>
    );
};

export default Person;