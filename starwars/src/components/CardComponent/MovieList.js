import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = (props) => {
	return (
		<div className="container">
			{props.chars.map((char) => (
				<MovieCard key={char.name} char={char} charelement={props.charelement} card={props.card} />
			))}
		</div>
	);
};
export default MovieList;
