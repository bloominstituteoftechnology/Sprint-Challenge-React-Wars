// Write your Character component here
import React from 'react';

function Character(props){
    return(
        <div className="Body">
            <h1 className="Header">React Wars ></h1>
            <div className="CharContainer">
                <h1>{props.data.name}</h1>
                <h2>{props.data.birth_year}</h2>
            </div>
        </div>
    );
}

export default Character;