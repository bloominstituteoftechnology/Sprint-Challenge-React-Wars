import React, {useState, useEffect} from "react";
import StarwarsCards from "./StarwarsCards";
import axios from "axios";
import { Row } from "reactstrap";

export default function StarwarsList () {
const [characters, setCharacters]= useState([]);


useEffect (() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
        console.log(response)
        setCharacters(response.data.results)
    })

    .catch(error => {
        console.log('Sorry no characters to be found', error)
    })

},[])
return (
    <div className="container"> 
    <Row> 
    {characters.map((character, index) => {
        return (
            <StarwarsCards 
            key={index}
            name={character.name}
            gender={character.gender}
            height={character.height}
            mass={character.mass}
            birth_year={character.birth_year}
            
            />

        );
    })}
    </Row>
    </div>
);

}