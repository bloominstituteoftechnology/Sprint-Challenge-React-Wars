import React from "react";
// import styled from 'styled-components'

import CharCard from "./CharCard";

export default function DisplayChars(props) {
  console.log(props);
  return (
    <div>
      {props.charList.map(char => {
        return <CharCard char={char} />;
      })}
    </div>
  );
}
