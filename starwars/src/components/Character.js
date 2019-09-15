import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.span`
font-size: 1.1em;
color: black;
`
const Title = styled.p`
font-weight: bold;
`



function Character(props) {
    return (
        
        <Paragraph>
           <Title> {props.name}</Title> 
           <p> Birthday {props.birth_year}</p>
           <p> Description : <br>
           </br> {props.name} is a {props.gender} Star Wars character, with {props.eye_color} eyes. Her/his height is {props.height}'' and his/her mass is {props.mass}</p>

        </Paragraph>
        
    )
}

export default Character ;
