import React from "react;";
// import styled from "styled-components";
// import { Button } from "bootstrap";
// const SWCard = styled.div;

const SWCard = props => {
  // const [characters, setCharacters] = React.useState(true);

  return (
    <div>
      <SWCard>
        <h2>Names: {props.name}</h2>
        <h3>Gender: {props.gender}</h3>

        <p>Height: {props.height}</p>
        <p>Skin: {props.skinColor}</p>
      </SWCard>
    </div>
  );
};

export default SWCard;
