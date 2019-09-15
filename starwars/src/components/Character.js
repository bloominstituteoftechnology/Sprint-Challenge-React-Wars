import React from 'react'
import styled from 'styled-components';

const CardStyle = styled.div`
width: auto;
font-size: 1.5em;
color: black;
margin-right:5px;
flex-direction: row;
justify-content: space-between;
background: white;
`
const Title = styled.h3`
font-weight: bold;
flex-direction: row;
justify-content: space-evenly;
`


function Character(props) {
    return (
            <CardStyle>
            <Title> {props.name} </Title> 
            <p>Birthday: {props.birth_year}</p>
            <p>Eyes color: {props.eye_color}</p>
            <p>Height: {props.height}''</p>
            <p>Mass : {props.mass}</p>
            <p>Gender : {props.gender ? props.gender : "It's a robot"}</p>
      </CardStyle>
    )
}

export default Character ;
