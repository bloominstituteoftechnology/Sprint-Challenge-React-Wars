import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PersonDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    border: solid black 1px;
    border-radius: 15px;
    width: 100%;
    background-color: tomato;
    box-shadow: 5px 5px 1px;
`;

function Person (props) {
    const [homeworld, setHomeWorld] = useState("");


    useEffect(() => {
        axios.get(props.person.homeworld)
          .then (res => setHomeWorld(res.data.name) //why can't I console.log before this setPeople?
          )
          .catch (err => console.log(err))
      }, [])

      
    return (
        <PersonDiv>
            <p>{props.person.name} whose eyes were {props.person.eye_color} as snow on {homeworld} </p>
        </PersonDiv>
    )
}

export default Person;