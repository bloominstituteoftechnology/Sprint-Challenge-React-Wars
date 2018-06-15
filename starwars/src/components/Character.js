import React from 'react';

const handleClick = character => {
  alert(character.name);
};

const Character = props => (
  <div>
    <img
      src={`${window.location.origin}/img/${props.img}.jpg`}
      alt={props.character.name}
      onClick={() => handleClick(props.character)}
      title={props.character.name}
    />
  </div>
);

export default Character;
