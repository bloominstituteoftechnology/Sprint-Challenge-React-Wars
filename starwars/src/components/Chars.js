import React, { Component } from "react";
import { render } from "react-dom";
import Char from './Char.js';

const Chars = (props) => {
	// return <div>{props.citiesProp.map(c => <City city={c} key={c.id} />)}</div>;
    return <div className="container">{props.charProps.map(char =><Char character ={char} key ={char.created} />)}</div>;
   
}

export default Chars;