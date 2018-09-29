import React, { Component } from "react";
import { render } from "react-dom";

class Char extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
           name: props.character.name,
           gender: props.character.gender,
           height:props.character.height,
           url:props.character.url
		}
	}


	render() {
	  return(
         <div> 
            <h1>{this.state.name}</h1>
            <h2>{this.state.gender}</h2>
            <h3>{this.state.height}</h3>
            <h3>{this.state.starships}</h3>
            
         </div>
	  	);
	}
}

export default Char;