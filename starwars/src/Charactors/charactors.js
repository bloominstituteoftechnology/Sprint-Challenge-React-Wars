import React from 'react';
import './charactors.css';

function Chars(props) {

	return (
		<div className="char">
			<div className="char-img">
				<img src={`../img/${props.char.name.replace(/\s+/g, '')}.jpg`} />
			</div>

			<div className="char-info">
				<div className="name">{props.char.name}</div>

				<div className="info">
					<span>&#9733; Birth Year - {props.char.birth_year}</span>
					<span>&#9733; Eye Color - {props.char.eye_color}</span>
					<span>&#9733; Gender - {props.char.gender}</span>
					<span>&#9733; Hair Color - {props.char.hair_color}</span>
					<span>&#9733; Height - {props.char.height}</span>
					<span>&#9733; Mass - {props.char.mass}</span>

				</div>

				<div className="assets-name">
					<li onClick={()=>{props.handleAsset('starships')}}>Spaceships</li>
					<li onClick={()=>{props.handleAsset('vehicles')}}>Vehicles</li>
					<li onClick={()=>{props.handleAsset('homeworld')}}>Planets</li>
				</div>

			</div>
		</div>
	);
}

export default Chars;
