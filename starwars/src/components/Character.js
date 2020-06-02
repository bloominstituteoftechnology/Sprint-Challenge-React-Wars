// Write your Character component here
import React from "react";
import styled from "styled-components";
// Write your Character component here

const Cards = (props) => {
  const { data } = props;

  return (
    <CardHolderDiv>
      {data.map((character) => {
        return (
          <Card>
            <h2>Name: {character.name}</h2>
            <h3>Gender: {character.gender}</h3>
            <h3>Status: {character.status}</h3>
            <h3>Spieces: {character.species}</h3>
            <ImgP>Mug Shot</ImgP>

            <MugImg src={character.image}></MugImg>
          </Card>
        );
      })}
    </CardHolderDiv>
  );
};

const CardHolderDiv = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fff;
  border: solid 1px gray;
  border-radius: 2%;
  width: 25%;
  margin: 2% 0;
  padding: 2%;
  box-shadow: 5px 5px 20px gray;
  color: #555;
`;
const MugImg = styled.img`
  border: gray solid 3px;
  border-radius: 5%;
  max-width: 100%;
`;

const ImgP = styled.p`
  color: red;
  font-size: 18px;
`;
export default Cards;
