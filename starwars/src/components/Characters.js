import React from "react";
import "./StarWars.css"

function Characters(props) {
    return (
        <div className="characters"> 
            <p>{props.charactersInfo.name}</p>
        </div>
    )
}

export default Characters;