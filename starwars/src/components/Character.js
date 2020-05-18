// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// Write your Character component here

const Cards = props => {
    let {data} = props;

    return (

       <div>

            { data.map(character => {
                return (

                    <StyledDiv>
                        <StyledCard>

                        <h3>Name: {character.name}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Status: {character.status}</h3>
                        <h3>Spieces: {character.species}</h3>
                        <h3>Mug Shot</h3>
                        
                        <StyledImg src={character.image}></StyledImg>
                       

                        </StyledCard>
                    </StyledDiv>

                )

            })}
            
       
       </div>

    )

}

const StyledDiv = styled.div`

flex-direction:column;
 display: flex;
 align-items:center;
`;

const StyledCard = styled.div`
background-color:#8cc5d2c7;
width: 50%;
margin:2%;
padding:2%;
border: dotted 2px black;
border-radius:50%;

`;
const StyledImg = styled.img`
border: black solid 2px;
border-radius:50%;
`;
export default Cards