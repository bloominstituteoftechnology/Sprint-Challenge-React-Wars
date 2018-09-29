import React from "react";

const Body = (props) => {
    console.log(props.character)
    return (
        <div className="stats">
            <p>height: {props.character.height} </p>
            <p>mass: {props.character.mass}</p>
            <p>hair: {props.character.hair}</p>
            <p>skin: {props.character.skin}</p>
        </div>
        )
}

export default Body;