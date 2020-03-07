import React from "react";
import styled from 'styled-components';

import PersonCard from "./personCard";

const PeopleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
`

function People(props) {
    const people = [];

    for(let person of props.people) {
        people.push(<PersonCard person={person} />);
    }

    if(people.length === props.people.length) {
        return (
            <div>
                <PeopleWrapper>
                    {people}
                </PeopleWrapper>
            </div>
        );
    }
}

export default People;