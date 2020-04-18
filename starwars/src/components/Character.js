// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards"


const Characters = props => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get ("https://rickandmortyapi.com/api/character/")
                .then(res => {
                    console.log(res);
                        setCharacters(res.data.results);
            })
                .catch(error => {
                    console.log("Rick we got a problem!", error);
                });
    },[])

    console.log(characters);

    return (
        <div className= "info">
                {characters.map(character => {
                return (<Cards  
                    name ={character.name}
                    image ={character.image} 
                    episode = {character.episode}
                    origin ={character.origin.name} 
                    species ={character.species}
                    type = {character.type}
                    />);
                })}
        </div>
    );

};

export default Characters;