import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    // border: 1px solid red;
    border-radius: 1rem;
    width: 13rem;
    margin: 1rem;
    :hover {
        background: RGBA(119, 136, 153, .5);
        .charName {
            color: yellow;
        }
        .stat {
            color: lightyellow;
        }
        .image {
            opacity: 1;
        }
    }`;
const StyledName = styled.h3`
color: silver;
text-shadow: 2px 2px black;`;
const StyledStat = styled.p`
color: gainsboro;
text-shadow: 2px 2px black;`;
const StyledImg = styled.img`
width: 13rem;
border-radius: 1rem 1rem 0 0;
opacity: .1;`;

const CharCard = (props) => {

    // console.log(props.name);
    // const imgPath=("{require("+`../img/${props.name}.jpg`+")}");
    // console.log(imgPath);

    return(    
        <StyledCard key={[props.name]} className="charCard">
            <StyledImg className="image" src={require(`../img/${props.name}.jpg`)} alt=""></StyledImg>
            <StyledName className="charName">{props.name}</StyledName>
            <StyledStat className="stat">Gender: {props.gender}</StyledStat>
            <StyledStat className="stat">Birth Year: {props.birth_year}</StyledStat>
            <StyledStat className="stat">Hair Color: {props.hair_color}</StyledStat>
            <StyledStat className="stat">Eye Color: {props.eye_color}</StyledStat>
            <StyledStat className="stat">Skin Color: {props.skin_color}</StyledStat>
            <StyledStat className="stat">Height (cm): {props.height}</StyledStat>
            <StyledStat className="stat">Weight (kg): {props.mass}</StyledStat>
            <StyledStat>{``}</StyledStat>
        </StyledCard>
    )
}


    export default CharCard;