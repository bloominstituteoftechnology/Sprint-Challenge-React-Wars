import React from 'react';
import './StarWars.css';
import Films from './Films';
import Species from './Species';
import HomeWorld from './HomeWorld';
import Starships from './Starships';
import Vehicles from './Vehicles';

class Card extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {films: this.props.films}
    }




    render() {
        
        return (

            // 
            <div className="characters">
                <div className="character">
                    <h1>{this.props.name}</h1>

                    <p>{this.props.name} gender is {this.props.gender === 'n/a'? 'unknown': this.props.gender} born in {this.props.birthYear}. </p>
                    <p>{this.props.name} has a height of {this.props.height} inches and a mass of {this.props.mass}. Skin color is {this.props.skinColor}
                    and {this.props.eyeColor} eyes. </p>
                     
                    <p>Created {this.props.created} | Edited {this.props.edited}</p>
                    <h5>Click a button for more information, click again to close information, if nothing happens no extra info is available</h5>

                    

                    <Films films ={this.props.films} characterName= {this.props.name}/>
                    <Species species = {this.props.species} characterName= {this.props.name}/>
                    <HomeWorld  homeWorld = {this.props.homeWorld} characterName = {this.props.name}/>
                    <Starships starShips ={this.props.starShips} characterName ={this.props.name}/>
                    <Vehicles characterName ={this.props.name} vehicles = {this.props.vehicles}/>
                    
                </div>
               
            
            </div>
        );
    }
}

export default Card; 