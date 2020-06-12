// Write your Character component here
import React from 'react';

function Character(props){
     
    return(
        <div className="CharContainer">
            <h1>{props.data.name}</h1>
            <h2>{props.data.birth_year}</h2>
            <h2>{props.data.hair_color}</h2>
        </div>
    );
}

export default Character;
