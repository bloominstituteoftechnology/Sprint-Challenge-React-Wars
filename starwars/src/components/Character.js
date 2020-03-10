import React from 'react';

const Character = (props) => {
	return (
		<div className = 'card'>
			<h1>{props.character.name}</h1>
      <p>Height: {props.character.height}cm</p>
      <p>Eye Color: {props.character.eye_color}</p>
      <p>Skin Color: {props.character.skin_color}</p>
		</div>
	);
};

export default Character;
