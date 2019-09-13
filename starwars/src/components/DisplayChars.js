import React from "react";
import styled from "styled-components";

import CharCard from "./CharCard";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 0;
`;

export default function DisplayChars(props) {
  return (
    <CardsContainer>
      {" "}
      {props.charList.map(char => {
        return <CharCard char={char} key={char.name} />;
      })}{" "}
    </CardsContainer>
  );
}
