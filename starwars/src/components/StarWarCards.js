import React from 'react';
import styled from "styled-components"

const Cont_box= styled.section`
border: solid-black;
margin: 50px;
text-align: center;

`



const StarWarCards = props => {
    return(
    <Cont_box>
        <div>
        <h1> Name: {props.name}</h1>
        <h2> Birth_Year: {props.birth_year}</h2>
        <h2> Gender: {props.gender}</h2>
        <h2> Created: {props.created}</h2>
        <h2> Eye Color: {props.eye_color}</h2>
           
        </div>
    </Cont_box>
    )
}
export default StarWarCards;