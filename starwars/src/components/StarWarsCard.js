import React from 'react';
import "./StarWars.css";




function StarWarsCard(props) {   
    

    return (
        <div className = "starwars-card">
            <p>{props.starwarsChar.name !== 'n/a' ? `Name: ${props.starwarsChar.name }`: ''}</p>
            <p>{props.starwarsChar.gender !== 'n/a' ? `Gender: ${props.starwarsChar.gender.replace(/^\w/, c => c.toUpperCase()) }`: ''}</p>
            <p>{props.starwarsChar.mass !== 'n/a' ? `Mass: ${props.starwarsChar.mass }`: ''}</p>            
            <p>{props.starwarsChar.height !== 'n/a' ? `Height: ${props.starwarsChar.height }`: ''}</p>
            <p>{props.starwarsChar.birth_year !== 'n/a' ? `Birth Year: ${props.starwarsChar.birth_year }`: ''}</p>
            <p>{props.starwarsChar.eye_color !== 'n/a' ? `Eye Color: ${props.starwarsChar.eye_color.split("-").map(element => element.replace(/^\w/, c => c.toUpperCase())).join('-') }`: ''}</p>           
            <p>{props.starwarsChar.hair_color !== 'n/a' ? `Hair Color: ${props.starwarsChar.hair_color.split(", ").map(element => element.replace(/^\w/, c => c.toUpperCase())).join(", ")}`: ''}</p>
        </div>)
}

export default StarWarsCard