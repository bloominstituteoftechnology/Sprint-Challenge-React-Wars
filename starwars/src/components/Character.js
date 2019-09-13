import React from 'react';

const People = ({name, mass, skinColor, height}) => {
    return (
            <h1>Starwars Character</h1>
            <h2>Name : {name}</h2>
                <p> {mass}</p>
                <p>: {skinColor}</p>
                <p>: {height}</p>
    )
} 


export default People;