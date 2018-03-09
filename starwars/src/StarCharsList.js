import React from 'react';
import StarCard from './StarCard';
import './StarCharsList.css';

const StarCharsList = props => {
    return (
        <div className="PeopleListContainer">
        {props.people.map(person => {
            return <StarCard key={person.name} person={person} />;
        })}
    </div>
    );
};

export default StarCharsList;