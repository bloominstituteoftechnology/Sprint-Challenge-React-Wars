import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.span`
font-size: 1.1em;
color: black;
`



function Character(props) {
    return (
        
        <Paragraph>
           <p> Personnage: {props.name}</p> 
           <p> Birthday {props.birth_year}</p>
           <p> Description : <br>
           </br> {props.name} is a {props.gender} Star Wars character, with {props.eye_color} eyes. Her/his height is {props.height}'' and his/her mass is {props.mass}</p>

        </Paragraph>
        
    )
}

export default Character ;
