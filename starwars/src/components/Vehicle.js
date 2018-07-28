import React from 'react';
import './StarWars.css';


class Vehicle extends React.Component{
    constructor(){
        super();
        this.state = {};
    }


    render() {


        return(
            <div>
                <h1>{this.props.characterName} owns a {this.props.name}</h1>
                <h3>The {this.props.name} has a max atmosphering speed of {this.props.speed} and a length of {this.props.length}</h3>
                <p>{this.props.characterName}'s {this.props.name} is model: {this.props.model} and manufactured by {this.props.manu}.
                Crew of {this.props.crew} and a cargo capacity of {this.props.cargo} and consumables last {this.props.consu} </p>
            </div>
            
        );
    }
}

export default Vehicle; 