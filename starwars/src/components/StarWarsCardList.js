import React from 'react';
import "./StarWars.css";
import StarWarsCard from "./StarWarsCard"


function StarWarsCardList(props) {
    return (
        <div className ="starwars-cards">            
            {Array.from(props.starwarsChars).map(starwarsChar => <StarWarsCard starwarsChar = {starwarsChar}/>)}
        </div>   )
}

export default StarWarsCardList