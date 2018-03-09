import React from 'react';
import PersonCard from './PersonCard';

const PeopleList = props => {
  return (
    <div>
      {props.people.map(person => {
        return <PersonCard person={person} />
      })}

    </div>
  );
};


export default PeopleList;