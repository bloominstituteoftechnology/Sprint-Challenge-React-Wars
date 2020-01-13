import React, {useEffect} from"react";
import axios from "axios";

function StarWarsCharacters () {
    const didUpdate =() => {
        axios.get ("https://swapi.co/api/people/")
        .then(response => console.log(response))
        .catch(error => console.log(error))
    };
    useEffect(didUpdate);
}
export default StarWarsCharacters