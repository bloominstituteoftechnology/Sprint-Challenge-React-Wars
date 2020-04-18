// Write your Character component here

import React from "react";
import styled from "styled-components";


const AppSectStyle = styled.div`text-align: left; padding-left: 10px;`;

const AppH3Style = styled.h3`

padding-bottom: 20px;
padding-top: 20px;
border-top: 1px solid brown;

`;



function Characters (props) {
    return (
     
            <AppSectStyle>
              
                <AppH3Style>Name: {props.name}</AppH3Style>
                <h3>Height: {props.height}</h3>
                <h3>Mass: {props.mass}</h3>
                <h3>Hair Color: {props.hair}</h3>
                <h3>Skin Color: {props.skin}</h3>
                
                </AppSectStyle>
      
    )}

export default Characters;