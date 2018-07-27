import React from 'react';

const Person = props => {
  return (
    <div>
    Name: {props.person.name} <br/> <br/>
    Birth Year: {props.person.birth_year} <br/> <br/>
    Gender: {props.person.gender} <br/> <br/>
    Height: {props.person.height} cm <br/> <br/>
    Mass: {props.person.mass} kg <br/>
    </div>
  );
};

export default Person;
