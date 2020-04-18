import React, { useState } from "react";
import CharName from "./CharName";
import CharSpecies from "./CharSpecies";
import CharImage from "./CharImage";

import styled from "styled-components";

const CardStyle = styled.div`
  border: 4px groove darkgray;
  border-radius: 4px;
  width: 300px;
  height: 510px;
`;

const CharacterCard = (props) => {
  return (
    <CardStyle>
      <CharImage image={props.props.image} />
      <CharName name={props.props.name} />
      <CharSpecies species={props.props.species} />
    </CardStyle>
  );
};

export default CharacterCard;
