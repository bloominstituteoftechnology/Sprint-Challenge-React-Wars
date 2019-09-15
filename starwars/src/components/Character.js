import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
font-size: 1.5em;
color: black;
flex-direction: row;
justify-content: space-evenly;
background: black;
`
const Title = styled.h3`
font-weight: bold;
flex-direction: row;
justify-content: space-evenly;
`


function Character(props) {
    return (
            <Card>
             <Title> {props.name}  </Title> 
            <p> Birthday: {props.birth_year}</p>
            <p>Eyes color: {props.eye_color}</p>
            <p> height: {props.height}''</p>
            <p>Mass : {props.mass}</p>
            <p>Gender: {props.gender} </p>
            </Card>
        // function DisplayGender (props){
        //     return
        //     if {props.gender}!=== null
        //     <p>Gender: {props.gender} </p>
        //     else
        //     <p> Gender: It's a robot</p>
        // }
            
           
    )
}

export default Character ;
