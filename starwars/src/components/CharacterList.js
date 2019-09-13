import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const CharacterContainer = styled.div `

`



export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            const people = response.data.results;
            console.log(response);
            setCharacters(people)
        })
        .catch(error => {
            console.log("These are not the droids you're looking for", error);
        });
    }, []);

    return(
        <CharacterContainer>
            {characters.map(object => {
                return <CharacterCard key = {object.name} name = {object.name} birth_year = {object.birth_year} gender = {object.gender} hair_color = {object.hair_color} eye = {object.eye} heigh = {object.height} mass = {object.mass} />;
            })}
        </CharacterContainer>
    );
}


