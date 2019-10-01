import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.js";
import axios from "axios";

export default function CharacterList(props) {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(result => {
                console.log(result);
                setCharacters(result.data.results);
                
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div className="character">
        {characters.map(character => {
            return (
            <CharacterCard
                name={character.name}
                homeworld={character.homeworld}
                starships={character.starships}
                url={character.url}
                key={character.name}
            />
            );
        })}
        </div>
    );
}


