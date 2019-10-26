import React, {useState} from 'react';
import styled from 'styled-components';


const StyledCard = styled.div``;
const StyledName = styled.h1``;
const StyledStat = styled.div``;

const CharCard = (props) => {
    // console.log(props.name);
    // console.log(props.gender);
    // console.log(props.birth_year);
    // console.log(props.hair_color);
    // console.log(props.eye_color);
    // console.log(props._skin_color);
    // console.log(props.height);
    // console.log(props.mass);
    // console.log("");

    return(
    <StyledCard>
        <StyledName>{props.name}</StyledName>
        <StyledStat>Gender: {props.gender}</StyledStat>
        <StyledStat>Birth Year: {props.birth_year}</StyledStat>
        <StyledStat>Hair Color: {props.hair_color}</StyledStat>
        <StyledStat>Eye Color: {props.eye_color}</StyledStat>
        <StyledStat>Skin Color: {props._skin_color}</StyledStat>
        <StyledStat>Height (cm): {props.height}</StyledStat>
        <StyledStat>Weight (kg): {props.mass}</StyledStat>
        <StyledStat>{``}</StyledStat>
    </StyledCard>
    )
}


    export default CharCard;