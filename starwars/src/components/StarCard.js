import React from "react";
import styled from "styled-components";

const Stars = styled.div`
  background: gray;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

// const Stars = styled.body`
//   display: flex;
// `;

const StarCard = props => {
  // const [characters, setCharacters] = useState(();

  return (
    <div>
      <Stars>
        <h2>Names: {props.name}</h2>
        <h3>Gender: {props.gender}</h3>

        <p>Height: {props.height}</p>
        <p>Skin: {props.skinColor}</p>
      </Stars>
    </div>
  );
};

export default StarCard;
