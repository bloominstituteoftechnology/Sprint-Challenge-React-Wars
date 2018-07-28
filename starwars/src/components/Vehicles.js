import React from 'react';
import './StarWars.css';
import Vehicle from './Vehicle';

class Vehicles extends React.Component{
    constructor(props){
        super(props);
        this.state = {vehicles: props.vehicles, vehiclesData: []}
    }


    getVehicleData = () => {
        
        const arrayOfVehicles = this.state.vehicles; // at this point they are just URL's.
        if(this.state.vehiclesData.length){
            this.setState({vehiclesData: []}); 
            
            
        } else {
            arrayOfVehicles.forEach( vehicle => this.getVehicle(vehicle));
        }
    }

    getVehicle = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        const arrayOfVehicles = this.state.vehiclesData; 
        
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            //console.log(data);
            arrayOfVehicles.push(data);  
            this.setState({ vechiclesData: arrayOfVehicles });
          })
          .catch(err => {
            throw new Error(err);
          });
      };


    render() {
        const vechicles = this.state.vehiclesData; 

        return(
            <div>

                <button onClick = {this.getVehicleData}>Vehicles</button>
                {vechicles.map((vechicle, i) => <Vehicle key={i} characterName = {this.props.characterName} name = {vechicle.name}
                model = {vechicle.model} manu={vechicle.manufacturer} cost = {vechicle.cost_in_credits} speed = {vechicle.max_atmosphering_speed} 
                crew = {vechicle.crew} passengers = {vechicle.passengers} cargo = {vechicle.cargo_capacity} consum = {vechicle.consumables} />)}
                
                

            </div>
        );


    }
}

export default Vehicles; 