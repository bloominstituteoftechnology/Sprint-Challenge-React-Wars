import React from 'react';
import './StarWars.css';
import People from './People';

const PeopleList = props => {
    return (
        <div className="peopleWrapper">
            {props.array.map((person, index) => {
                return <People name={person.name} birthYear={person.birth_year} gender={person.gender} eyeColor={person.eye_color} films={person.films} height={person.height} mass={person.mass} homeworld={person.homeworld} url={person.url} skinColor={person.skin_color} key={person.name} descriptions={props.array2} index={index} />
            })}

            {/* <People name={props.array[0].name} birthYear={props.array[0].birth_year} gender={props.array[0].gender} eyeColor={props.array[0].eye_color} films={props.array[0].films} height={props.array[0].height} mass={props.array[0].mass} homeworld={props.array[0].homeworld} url={props.array[0].url} key={props.array[0].name} obj={props.obj} /> */}
        </div>
    );

}

export default PeopleList;
