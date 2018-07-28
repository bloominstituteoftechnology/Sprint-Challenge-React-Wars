import React from 'react'; 
import './StarWars.css'; 


class Specie extends React.Component {
    constructor(){
        super(); 
        this.state = {}
    }


    render(){

        return(
            <p>{this.props.characterName} is {this.props.name} classified as {this.props.classification}. The average height for the species is {this.props.averageHeight}.
            The skin colors vary between {this.props.skinColor} as well as hair color which ranges between {this.props.hairColor} and eye colors also vary between {this.props.eyeColor}.
            The average life span is {this.averageLifespan} years. Languages spoken are {this.props.language}</p>
        ); 
    }
}

export default Specie; 