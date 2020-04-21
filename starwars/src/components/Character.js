// Write your Character component here
import React from 'react';
import styled from 'styled-components';


export default function Character({characters}) {
    
    console.log(characters)
    const WrapperDiv = styled.div`
        border: 2px solid black;
        width: 350px;
        margin: 0 auto;
        margin-bottom: 15px;
        background-color: rgba(255,255,255,.4);
        border-radius: 5px;
    `;
    const StyleH4 = styled.h4 `
        background: -webkit-linear-gradient(blue, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `;

    return (
        <WrapperDiv>
            <StyleH4>{characters.name}</StyleH4>
            <p>Height: {characters.height}cm</p>
            <p>Mass: {characters.mass}kg</p>
            <p>Birth year: {characters.birth_year}</p>
        </WrapperDiv>
    )
}

