import React from 'react';
import styled from 'styled-components'

const PersonWrapper = styled.div `
    text-align: center;
    background-color: azure;
    width: 30vw;
    margin-top: 5%;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px #0000003d;
`;

const PersonList = styled.ul `
    list-style: none;
`;


export default function Person(props) {
    return (
        <PersonWrapper>
        <h2>
            {props.name}
        </h2>

        <PersonList>
            
            <li>
            {props.gender}
            </li>
        
            <li>
            {props.eye_color} 
            </li>
            
            <li>
            {props.height} cm
            </li>

            <li>
            {props.mass} g
            </li> 
        </PersonList>
        </PersonWrapper>
      );
}