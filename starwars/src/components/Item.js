import React from "react";
import './StarWars.css';
import Film from './Films';
import Species from './Species';
import Ship from './Starships';
import Veh from './Vehicles';


function Item(props){
	return (
		<div className="starDiv">
			<h2>{props.name}</h2>
			<ul>
				<li>Birth: {props.birth}</li>
				<li>created: {props.created}</li>
				<li>edited: {props.edited} </li>
				<li>eye color: {props.eye_color}</li>
				<li>gender: {props.gender}</li>
				<li>hair color: {props.hair_color}</li>
				<li>height: {props.height}</li>
				<li>homeworld: {props.homeworld}</li>
				<li>mass: {props.mass}</li>
				<li>skin color: {props.skin_color}</li>
				<li>url: {props.url}</li>
			</ul>
			<div className="flex">
				<ul className="flex-item">Films: {props.films.map((film) => <Film film={film}/>)}</ul>
				<ul className="flex-item">Species: {props.species.map((spe) => <Species spe={spe}/>)}</ul>
				<ul className="flex-item">Starships: {props.starships.map((ship) => <Ship ship={ship}/>)}</ul>
				<ul className="flex-item">Vehicles: {props.vehicles.map((veh) => <Veh veh={veh}/>)}</ul>
			</div>
		</div>
	);
}


export default Item;
