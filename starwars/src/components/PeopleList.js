import React from 'react';
import './StarWars.css';
import People from './People';

const PeopleList = props => {
    return (
        <div className="peopleWrapper">
            {props.array.map(person => {
                return <People name={person.name} eyeColor={person.eye_color} />
            })}
        </div>
    );

}

export default PeopleList;
