import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsChars from "./StarWarsChars";
import styled from "styled-components";

const CharsList = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
            .then((r) => {
                console.log(r.data.results)
                setChars(r.data.results)

            })
    }, [])
    return (
        <>
            {chars.map(char => {
                return (
                    <StarWarsChars 
                        key = {char.name}
                        name = {char.name}
                        height = {char.height}
                        mass = {char.mass}
                        img = {char.url}
                    />
                )
            })}
        </>
    )
}


export default CharsList;