import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoStyle = styled.img`
  display: inline-block;
  height: 200px;
  width: 400px;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

const Logo = (props) => {
  return (
    <LogoContainer>
      <LogoStyle src={logo} alt={"Star Wars logo"} />
    </LogoContainer>
  );
};

export default Logo;
