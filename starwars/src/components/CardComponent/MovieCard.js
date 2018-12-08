import React from 'react';
import MovieList from './MovieList';
const MovieCard = (props) => {
	// let obj = [];

	// Object.entries(obj).map(([ key, value ]) => ({ key, value }));
	// let todo = [];
	let todo = [];
	for (let [ key, value ] of Object.entries(props.char)) {
		todo.push(`${key}: ${value}`);
	}
	return <div className="card-cta">{todo}></div>;
};

export default MovieCard;
