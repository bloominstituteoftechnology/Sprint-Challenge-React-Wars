import React from 'react';

const StarwarsChar = props => {
  return (
    <div
    //   style={props.todo.completed ? { textDecoration: 'line-through' } : null}
    //   onClick={() => props.handleToggleComplete(props.todo.id)}
    >
    <div>
      Name: {props.starwarsChar.name}
    </div>
    <div>
         Gender:{props.starwarsChar.gender}
         </div>
    </div>
  );
};

export default StarwarsChar;

//{props.starwarsChar.eye_color}, 
// {props.starwarsChar.films}, {props.starwarsChar.hair_color}, {props.starwarsChar.height}, 
// {props.starwarsChar.homeworld}, {props.starwarsChar.mass}, {props.starwarsChar.skin_color}, 
// {props.starwarsChar.species}, {props.starwarsChar.starships}, 
//   {props.starwarsChar.vehicles}