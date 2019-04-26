import React from "react"

function Character(props) {
    return (
        <div>
        {props.list.map (char => {
            return (
                <div className = "card">
            <h1>{char.name}</h1>
            <p className ="name">Name: {char.name}</p>
            <p className ="bd">Birth Year: {char.birth_year}</p>
            <p className ="sc">Skin Color: {char.skin_color}</p>
            <p className ="ec">Eye Color: {char.eye_color}</p>
            <p className ="hc">Hair Color: {char.hair_color}</p>
            <p className ="height">Height: {char.height}</p>
            <p className ="gender">Gender: {char.gender}</p>
            <p className ="mass">mass: {char.mass}</p>
            <p className ="created">Creation Date: {char.created}</p>
            <p className ="edited">Birth Year: {char.edited}</p>
            </div>
            )
        })}
        </div>
    )
}

export default Character