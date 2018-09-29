import React from 'react';
import './charlist.css';

const CharList = props => {
	return (
		<div className="charContainer">
			{props.charList.map(char => {
				return (
					<div className="characterCard" key={char.name}>
						<h2>Name: {char.name}</h2>
						<p>Birth Year: {char.birth_year}</p>
						<p>Skin Color: {char.skin_color}</p>
						<p>Hair Color: {char.hair_color}</p>
						<p>Eye Color: {char.eye_color}</p>
						<p> Gender: {char.gender}</p>
						<p>
							Height: {char.height}
							cm
						</p>
						<p>
							Mass: {char.mass}
							kg
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default CharList;
