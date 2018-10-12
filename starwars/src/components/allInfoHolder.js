import React from 'react';
import BasicInfoContainer from './basicInfoContainer';
import './StarWars.css';

const AllInfoHolder = props =>
{
  return (
    <div>
      { props.persons.map( element =>
        {
          return (
            <BasicInfoContainer uniqueID = { element.id } person = { element } />
          )
        })}
    </div>
  )
}

export default AllInfoHolder;