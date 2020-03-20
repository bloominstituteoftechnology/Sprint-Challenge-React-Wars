import React from "react";
import styled from "styled-components";

const PersonCard = styled.div`
  background: DarkCyan;
  color: white;
  width: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 20px;
  &:hover{
    box-shadow:3px 3px 5px 6px #cccccc;
  }
`;


const StarWarsCard = props => {
  return (
    <PersonCard>
        <h4>{props.name}</h4>
        <p>gender: {props.gender}</p>
        <p>eye_color: {props.eye_color}</p>
    </PersonCard>
  );
};

export default StarWarsCard;
