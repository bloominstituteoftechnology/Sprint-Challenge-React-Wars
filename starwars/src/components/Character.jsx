import React from 'react';

const Character = (props) => {
  return (
    <div>
      <div>{props.char.name}</div>
      <div>{props.char.birth_year}</div>
    </div>
  );
};

export default Character;
