import React, { useState, useEffect } from "react";

import axios from "axios";
import StarWarsCard from "./StarWarsCard";

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row
  } from 'reactstrap'


export default function StarWarsList() {
    const [starWarsCharacter, setStarWarsCharacter] = useState([])

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response);
                setStarWarsCharacter(response.data.results);
            })
            .catch(err => {
                console.log("this is a error", err);
            })
    }, [] );

    return (
        <div>
            {starWarsCharacter.map((character) => {
              return (
                // <Card>
                
                    <StarWarsCard
                    name={character.name}
                    birthYear={character.birth_year}
                    gender={character.gender}
                    skinColor={character.skin_color}
                    hairColor={character.hair_color}
                    height={character.height}
                    homeWorld={character.homeworld} 
                   
                    />
                   
                // </Card>
               
              )
               
            })}
            </div>
    )
       
}