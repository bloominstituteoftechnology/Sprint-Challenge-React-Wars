import React from "react";
import styled from 'styled-components';

const Name = styled.h2`
    font-size: 1.85rem;
`
const Born = styled.p`

`
const Height = styled.p`

`
const Weight = styled.p`

`
const Wrapper = styled.div`
    background-color: rgba(255,255,255,0.5);
    border-radius: 14px;
    border: solid 5px white;
    width: 22%;
    font-family: 'Spartan', sans-serif;
    color: #414141;
    padding: 15px 0;
    margin-bottom: 30px;
`

function PersonCard(props) {

    console.log(props);
    return (
        <Wrapper>
            <Name>{ props.person.name }</Name>
            <Born>Born: { props.person.birth_year }</Born>
            <Height>Height: { props.person.height }cm</Height>
            <Weight>Weight: { props.person.mass }kg</Weight>
        </Wrapper>
    );
}

export default PersonCard;
