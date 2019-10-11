import React from "react";
// import CharsList from "./CharsList"

const StarWarsChars = (props) => {
    return(
        <>
        <h1>Name: {props.name}</h1>
        <img src= {props.img} alt= {props.title}/>
        <p>Height: {props.height}</p>
        <p>Jiggle: {props.mass}</p>
        </>
    )
}
export default StarWarsChars;