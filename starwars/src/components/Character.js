// Write your Character component here
import React from 'react';
import styled from 'styled-components'
// Write your Character component here



const Cards = props => {
    const {data} = props;

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
background-image: linear-gradient(35deg, #c7a46e, #64c1d6);
    width: 50%;
    margin: 2%;
    padding: 2%;
    border: solid 2px black;
    border-radius: 10%;
    box-shadow: 5px 5px #252222;
    color: black;
`;
const StyledImg = styled.img`
border: black solid 2px;
border-radius:50%;
`;
export default Cards