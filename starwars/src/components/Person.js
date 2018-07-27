import React from 'react';
import './StarWars.css';

const Person = props => {
  return (
    <div className='col-sm-4'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Name: {props.person.name}</h5>
          <p>Birth Year: {props.person.birth_year} <br/></p>
          <p>Gender: {props.person.gender} <br/></p>
          <p>Height: {props.person.height}cm <br/></p>
          <p>Mass: {props.person.mass}kg</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
