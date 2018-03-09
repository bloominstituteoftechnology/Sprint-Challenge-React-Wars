import React, { Component } from 'react';
import Films from '../films/Films';
import Species from '../species/Species';
import Starships from '../starships/Starships';
import Vehicles from '../vehicles/Vehicles';
import './Warobjects.css';

class Warobjests extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className = 'war-object'>

                <div className = 'names'>
                 {this.props.object.name}
                </div>
                <div>
                    Gender: {this.props.object.gender}
                </div>
                <div>
                    Birth Year: {this.props.object.birth_year}
                </div>
                <div>
                    Height: {this.props.object.height}
                </div>
                <div>
                    Mass: {this.props.object.mass}
                </div>
                <div>
                    Eye Color: {this.props.object.eye_color}
                </div>
                <div>
                    Hair Color: {this.props.object.hair_color}
                </div>

                <div>
                    Skin Color: {this.props.object.skin_color}
                </div>
                <div>
                    Created: {this.props.object.created}
                </div>
                <div>
                    Edited: {this.props.object.edited}
                </div>
                <div>
                    Home World: {this.props.object.homeworld}
                </div>

                <div>
                    <div className = 'titles'>Films: </div> 
                    {this.props.object.films.map(film =><Films key = {film} film = {film} />
                    )}
                </div>
                <div>
                    <div className = 'titles'>Species: </div> 
                    {this.props.object.species.map(specy => <Species key = {specy} specy = {specy} />
                    )}
                </div>
                <div>
                    <div className = 'titles'>Starships: </div> 
                    {this.props.object.starships.map(starship => <Starships key = {starship} starship = {starship} />
                    )}
                </div>
                <div>
                   <div className = 'titles'>Vehicles: </div> 
                   {this.props.object.vehicles.map(vehicle => <Vehicles key = {vehicle} vehicle = {vehicle} /> 
                    )}
                </div>

            </div>
        );
    }
}

export default Warobjests;