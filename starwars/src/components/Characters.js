import React from 'react';


// step 3
// create component, render values 


const Characters = props => {
    return (
        <div className = "card">
            <h1>name: {props.characters.name}</h1>
            <h2>gender: {props.characters.gender}</h2>
            <h2>birth year: {props.characters.birth_year}</h2>
        </div>
    );
};

export default Characters;