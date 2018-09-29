import React, { Component } from "react";
import { render } from "react-dom";
import Card from './Card.js';

class Char extends React.Component {
	constructor(props) {
		super(props)
           console.log(props)
		this.state = {
           name: props.character.name,
           gender: props.character.gender,
           height:props.character.height,
           mass:props.character.mass,
           skin: props.character.skin_color,
           eyes: props.character.eye_color,
           starships:props.character.starships.length
           
		}
	}


	render() {
	  return(
         <div> 
            <Card c={this.state} />
         </div>
	  	);
	}
}

export default Char;