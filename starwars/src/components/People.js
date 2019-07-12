import React from 'react';
import Person from "./Person";
import styled from 'styled-components';

const PeopleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid green 1px;
    width: 25vw;
    margin: auto;
`;

const PersonDiv = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;



function People (props) {
    return (
        <PeopleDiv>
            {props.people.map(person => {
                return (
                    <PersonDiv key = {Math.random()}>
                        <Person person = {person}/>
                    </PersonDiv>
                )
            })}
        </PeopleDiv>
    )
}

export default People;