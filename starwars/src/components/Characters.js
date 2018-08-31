import React from 'react';
import './StarWars.css';

const Char = (props) => {
    return <div class="card">
	<li>{props.char.birth_year}</li>
	<li>{props.char.created}</li>
	<li>{props.char.edited}</li>
	<li>{props.char.eye_color}</li>
	<li>{props.char.gender}</li>
	<li>{props.char.hair_color}</li>
	<li>{props.char.height}</li>
	<li>{props.char.mass}</li>
	<li>{props.char.name}</li>
	<li>{props.char.skin_color}</li>
    </div>;
};

export default Char;
