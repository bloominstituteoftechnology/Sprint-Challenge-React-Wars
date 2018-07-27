import React from 'react';
import './StarWars.css';

class Card extends React.Component {
    constructor(){
        super();
    }




    render() {

        return (

            // <div onClick = {this.props.checkTheState}>Checking out Placement</div>
            <div className="characters">
                <div className="character">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.name} gender is {this.props.gender === 'n/a'? 'unknown': this.props.gender} born in {this.props.birthYear}. </p>
                    <p>{this.props.name} has a height of {this.props.height} inches and a mass of {this.props.mass}. Skin color is {this.props.skinColor}
                    and {this.props.eyeColor} eyes. </p>

                    <p>{this.props.name} was created {this.props.created} and edited {this.props.edited}</p>


                </div>
            
            </div>
        );
    }
}

export default Card; 