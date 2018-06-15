import React from 'react';

const StarwarsChar = props => {
  return (
    <div
    //   style={props.todo.completed ? { textDecoration: 'line-through' } : null}
    //   onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.starwarsChar.name}
    </div>
  );
};

export default StarwarsChar;