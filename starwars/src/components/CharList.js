import React from "react";
import Chars from "./Chars"

const CharList = props => {

  return <div>{props.charsProp.map(name => <Chars name={name} key={name.created}/>)}</div>;

}

export default CharList;
