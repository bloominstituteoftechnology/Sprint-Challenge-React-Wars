// Write your Character component here
import React from 'react';

function Character(props){
    return(
        <div className="Body">
            <h1 className="Header">Character</h1>
            <h1>{props.data.name}</h1>
        </div>
    );
}

export default Character;