import React from 'react';
import './StarWars.css';
import Starship from './Starship'; 

class Starships extends React.Component{
    constructor(props){
        super(props); 
        this.state = {starShips: props.starShips, starShipData: []}; 
    }

    getStarShips = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        const starShips = this.state.starShipData; 
        
        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then(data => {
            // console.log(data);
            starShips.push(data);  
            this.setState({ starShipData: starShips});
            })
            .catch(err => {
            throw new Error(err);
            });
          };




    getStarShipsData = () => {
    
    const arrayOfStarShips = this.state.starShips; // at this point they are just URL's.
    if(this.state.starShipData.length){
        this.setState({starShipData: []}); 
        
        
    } else {
        arrayOfStarShips.forEach( starShip => this.getStarShips(starShip));
        
    }
    
}

    render() {
        const starShips = this.state.starShipData;
        
        return (
            <div>
                <button onClick= {this.getStarShipsData}>Starships</button>
                {starShips.map((starShip, i) => <Starship key={i} characterName ={this.props.characterName} name={starShip.name} model={starShip.model}
                manufacturer = {starShip.manufacturer} cost = {starShip.cost_in_credits} length = {starShip.length} speed={starShip.max_atmosphering_speed}
                crew = {starShips.crew} passengers={starShips.passengers} cargo={starShips.carGo} consumables={starShips.consumables} rating = {starShips.hyperdrive_rating}
                mglt = {starShips.MGLT} />)}
            </div>
            
        ); 
    }
}

export default Starships; 