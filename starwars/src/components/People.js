import React from 'react';
import Person from "./Person";
import styled from 'styled-components';

const PeopleDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 75vw;
    margin: auto;
    justify-content: space-evenly;
`;

const PersonDiv = styled.div`
    width: 16%;
    margin-bottom: 10px;
    margin: 5px 10px;
    height: 90px;
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