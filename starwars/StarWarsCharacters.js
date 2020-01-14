import React, {useEffect, useState} from"react";
import axios from "axios";
import CharacterCards from "./CharacterCards";

export default function StarWarsCharacters() {
    const [people, setPeople] = useState([]);
    const didUpdate = () => {
        axios
        .get ("https://swapi.co/api/people/")
        .then(response => {
            setPeople(response.data);
            console.log(response)
        })
        .catch(error => console.log(error));
        
    };

    useEffect(didUpdate, []);

    return <div className="person">
        {people.map(person => {
            return <CharacterCards />
        })}
        </div>
    
 }
