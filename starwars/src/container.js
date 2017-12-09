import React, { Component } from 'react';

const container = ({ starwarsChar }) => {
	return (
      <div>
       <div>name: {starwarsChar.name} </div>
       <div>birth year: {starwarsChar.birth_year} </div>
       <div>films: {starwarsChar.films}</div>
       <div>home planet: {starwarsChar.homeworld} </div>
      </div>
	);
}

export default container;