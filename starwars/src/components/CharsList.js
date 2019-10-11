import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsChars from "./StarWarsChars";
import styled from "styled-components";

const CharsList = () => {
    const [chars, setChars] = useState([]);

    const Container = styled.div`
        transition: transform 0.2s ease-in;
        border-radius: 50px;
        background: black;
        color: white;
        width: 300px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        cursor: pointer;
        box-shadow: 0px 6px 10px -2px black;

        &:hover {
            transform: translateY(-5px) scale(1.2);
            background: #5a4e5e
        }
`;

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
                    <Container>
                    <StarWarsChars 
                        key = {char.name}
                        name = {char.name}
                        gender= {char.gender}
                        height = {char.height}
                        mass = {char.mass}
                    />
                    </Container>
                )
            })}
        </>
    )
}


export default CharsList;