import React from 'react';

const Person = (props) => {
  {if (!props.people) {
    props.people.name = 'loading'
  }}
  return (
    <div>
      {console.log(props.people)}
      {props.people.map((person, i) => {
        return (
          <div key={i}>
            <h1>{person.name}</h1>
            <h4>Hair: {person.hair_color} Eye: {person.eye_color}</h4>
            <h4>Height: {person.height / 100}m </h4>
          </div>
        )
      })}
    </div>
  )
}

export default Person;
