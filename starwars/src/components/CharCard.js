import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    // border: 1px solid red;
    border-radius: 1rem;
    width: 13rem;
    margin: 1rem;
    :hover {
        background: RGBA(119, 136, 153, .5)
    }`;
const StyledName = styled.h3`
color: white;
text-shadow: 3px 2px black;`;
const StyledStat = styled.p`
color: gainsboro;
text-shadow: 2px 2px black;`;

const CharCard = (props) => {
    // console.log("index: ", props.index);
    console.log(props.name);
    // console.log(props.gender);
    // console.log(props.birth_year);
    // console.log(props.hair_color);
    // console.log(props.eye_color);
    // console.log(props._skin_color);
    // console.log(props.height);
    // console.log(props.mass);
    // console.log("");

    return(
        // <div>
        //     <h2>CharCard Return</h2>
        //     <p>{props.name}</p>
        // </div>
    
        <StyledCard className="charCard">
            <StyledName className="charName">{props.name}</StyledName>
            <StyledStat>Gender: {props.gender}</StyledStat>
            <StyledStat>Birth Year: {props.birth_year}</StyledStat>
            <StyledStat>Hair Color: {props.hair_color}</StyledStat>
            <StyledStat>Eye Color: {props.eye_color}</StyledStat>
            <StyledStat>Skin Color: {props.skin_color}</StyledStat>
            <StyledStat>Height (cm): {props.height}</StyledStat>
            <StyledStat>Weight (kg): {props.mass}</StyledStat>
            <StyledStat>{``}</StyledStat>
        </StyledCard>
    
    )
}


    export default CharCard;