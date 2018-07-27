import React from 'react';
import Person from './Person';

const People = props => {
  return (
    <div className="row">
      {props.people.map(person => <Person key={person.name} person={person} />)}
    </div>
  );
};

export default People;
