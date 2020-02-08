import React from "react";
import {StyleDiv, StyleH1, StyleP} from "./StyledComponents";

function PersonCard(props) {
    //consloe.log(props);
    return (
        <StyleDiv>
            <StyleH1>{props.name}</StyleH1>
            <StyleP>{props.name} was born in {props.birth_year}, has {props.eye_color} eyes, {props.hair_color} hair, 
            and {props.skin_color} skin.
            </StyleP>
        </StyleDiv>
    )
}

export default PersonCard