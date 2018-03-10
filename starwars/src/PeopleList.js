import React from 'react';
import PersonCard from './PersonCard';
import './PeopleList.css';

const PeopleList = props => {
  return (
    <div className="row">
      {props.people.map(person => {
        return <PersonCard person={person} />
      })}

    </div>
  );
};


export default PeopleList;