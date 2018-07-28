import React from 'react'; 
import './StarWars.css'; 



class HomeWorld extends React.Component{
    constructor(props){
        super(props);
        this.state = {homeWorld: props.homeWorld, homeWorldData : []};
    }

    getHomeWorld = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        const homeWorld = this.state.homeWorldData; 
        
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            //console.log(data);
            homeWorld.push(data);  
            this.setState({ homeWorldData: homeWorld});
          })
          .catch(err => {
            throw new Error(err);
          });
      };


    getHomeWorldData = () => {
    
    const homeWorld = this.state.homeWorld; // at this point they are just URL's.
    if(this.state.homeWorldData.length){
        this.setState({homeWorldData: []}); 
        
        
    } else {
        this.getHomeWorld(homeWorld)
    }
    
}

    render() {
        const homeWorld = this.state.homeWorldData[0];
        console.log(homeWorld); 
        return(
            <div>
                <button onClick = {this.getHomeWorldData}>HomeWorld</button>
                {this.state.homeWorldData.length > 0 ? <p>{this.props.characterName}'s home world is called {homeWorld.name}. {homeWorld.name}
                has a rotational period of {homeWorld.rotation_period} and a oribital period of {homeWorld.orbital_period}.
                {homeWorld.name} has a {homeWorld.diameter} diameter and {homeWorld.climate} climate. It's terrain is {homeWorld.terrain}
                {homeWorld.name} has surface water of {homeWorld.surface_water} and estimated population of {homeWorld.population}. </p>: <p></p>}

            </div>
            
        );
    }
}
export default HomeWorld; 