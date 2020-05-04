import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard.js";

const CharacterStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `;

const CharacterList =() => {
    const [starChar, setStarChar] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        axios
            .get("https://swapi.py4e.com/api/people/")
            .then(res => {
                console.log(res.data);
                setStarChar(res.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
        }, []);

        return (
            <CharacterStyle>
                {isLoading && <h3>data is loading...</h3>}
                {starChar.map(char => (
                    <CharacterCard char={char} key={char.name} />
                ))}
            </CharacterStyle>
        );
};

export default CharacterList;
