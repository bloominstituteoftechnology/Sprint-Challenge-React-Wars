import React from "react";
import styled from "styled-components";

const ImageStyle = styled.img`
  height: 94%;
  width: 94%;
  border-radius: 10px;
`;

const CharImage = (props) => {
  return (
    <div>
      <ImageStyle
        alt="character pic"
        className="char-image"
        src={props.image}
      />
    </div>
  );
};

export default CharImage;
