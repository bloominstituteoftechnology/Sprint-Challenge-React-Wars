import React from "react";
import './StarWars.css';

function Item(props){
	return (
		<div className="starDiv">
			<h2>{props.item.name}</h2>
			<ul>
				<li>Birth: {props.item.birth}</li>
				<li>created: {props.item.created}</li>
				<li>edited: {props.item.edited} </li>
				<li>eye color: {props.item.eye_color}</li>
				<li>gender: {props.item.gender}</li>
				<li>hair color: {props.item.hair_color}</li>
				<li>height: {props.item.height}</li>
				<li>homeworld: {props.item.homeworld}</li>
				<li>mass: {props.item.mass}</li>
				<li>skin color: {props.item.skin_color}</li>
				<li>url: {props.item.url}</li>
			</ul>
			<div className="flex">
				<ul className="flex-item">Films {props.item.films.map((film) => <li key={film}>{film}</li>)}</ul>
				<ul className="flex-item">Species: {props.item.species.map((spe) => <li key={spe}>{spe}</li>)}</ul>
				<ul className="flex-item">Starships: {props.item.starships.map((ship) => <li key={ship}>{ship}</li>)}</ul>
				<ul className="flex-item">Vehicles: {props.item.vehicles.map((veh) => <li key={veh}>{veh}</li>)}</ul>
			</div>
		</div>
	);
}


export default Item;
