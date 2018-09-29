import React, { Component } from "react";
import { render } from "react-dom";
import Char from './Char.js';

const Chars = (props) => {
	// return <div>{props.citiesProp.map(c => <City city={c} key={c.id} />)}</div>;
    return <div>{props.charProps.map(char =><Char character ={char} id ={char.mass} />)}</div>;
   
}

export default Chars;