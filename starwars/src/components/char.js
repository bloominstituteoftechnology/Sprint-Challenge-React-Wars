import React from 'react';
import { Badge } from 'reactstrap';

import styled from 'styled-components';

const CharDiv = styled.div `

background:silver;
margin:1% 40%;
border-radius:5%;

`




const Char = props => {


    return (
        <CharDiv>
            <h2><Badge color="secondary">{props.charProp}</Badge></h2>
            <h6>Birth Year: {props.charYear}</h6>
             
            <h6>Mass: {props.charMass}</h6>
        </CharDiv>
    )
}







export default Char

