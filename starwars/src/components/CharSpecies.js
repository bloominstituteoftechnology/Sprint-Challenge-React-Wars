import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: rgb(0, 175, 199);
  font-size: 1.4rem;
  font-style: italic;
`;

const StyleName = styled.h2`
  color: rgb(156, 202, 30);
  font-size: 1.8rem;
`;

const CharSpecies = (props) => {
  return (
    <div>
      <StyledSpan>Species</StyledSpan>
      <StyleName>{props.species}</StyleName>
    </div>
  );
};

export default CharSpecies;
