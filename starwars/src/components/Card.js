import React from "react";
import { H3, H1, Div } from './StyledComps'

const Card = (props) => {
    
    return (
    <Div 
    key={props.url}> 
    <H1>{props.name} </H1>
    <H3>Birth-year: {props.birth_year} </H3>
    <H3>Gender: {props.gender} </H3>
    <H3>Eye-color: {props.eye_color} </H3>
    </Div>
    )
}

export default Card;