import React from "react";
import { H3, H1, Div } from './StyledComps'

const Card = (props) => {
    
    return (
    <Div 
    key={props.url}> 
    <H1>{props.name} </H1>
    <H3>{props.birth_year} </H3>
    <H3>{props.gender} </H3>

    </Div>
    )
}

export default Card;