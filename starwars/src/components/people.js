import React, {useState} from 'react';
import styled from "styled-components";

const CharacterName = styled.h1`
    text-align: center;
    background-color: black;
    color: white;
`

const Container = styled.div`
    background-color: white;
`

const Attr = styled.p`
    padding-bottom: 1rem;
    text-align: center;
    font-size: 1.3rem
`

function People(props) {
    console.log(props)
    return(
        <div>
            {props && props.info && props.info.results.map((person) => {
                return (<Container>
                            <CharacterName>{person.name}</CharacterName>
                            <Attr>Gender = {person.gender}</Attr>
                            <Attr>Height = {person.height}"</Attr>
                        </Container>)
            })}
        </div>
    )
}

export default People;