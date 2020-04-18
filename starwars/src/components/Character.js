// Write your Character component here

import React from "react";
import styled from "styled-components";


const AppSectStyle = styled.div`text-align: left; padding-left: 50px;`;

const AppH3Style = styled.h3`

padding-bottom: 20px;
padding-top: 20px;
border-top: 1px solid brown;`;

const Categories = styled.h2`

${props => (props.type === 'name' ? `color: red;` : null)}
${props => (props.type === 'height' ? `color: blue;` : null)}
${props => (props.type === 'mass' ? `color: green;` : null)}
${props => (props.type === 'hair' ? `color: orange;` : null)}
${props => (props.type === 'skin' ? `color: purple;` : null)}
`;



function Characters (props) {
    return (
     
            <AppSectStyle>
              
                <AppH3Style><Categories type="name">Name: </Categories> {props.name}</AppH3Style>
                <h3><Categories type="height">Height:</Categories> {props.height}</h3>
                <h3><Categories type="mass">Mass:</Categories> {props.mass}</h3>
                <h3><Categories type="hair">Hair Color:</Categories> {props.hair}</h3>
                <h3><Categories type="skin">Skin Color:</Categories> {props.skin}</h3>
                
                </AppSectStyle>
      
    )}

export default Characters;