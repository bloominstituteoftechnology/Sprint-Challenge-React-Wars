import React from 'react'; 
import './StarWars.css'; 
import Specie from './Specie'; 

class Species extends React.Component{
    constructor(props) {
        super(props);
        this.state = { species : props.species, speciesData: [],}
    }

    getSpecies = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        const arrayofSpecies = this.state.speciesData; 
        console.log(arrayofSpecies); 
        console.log("arrayofSpecies"); 
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            //console.log(data);
            arrayofSpecies.push(data);  
            this.setState({ speciesData: arrayofSpecies });
          })
          .catch(err => {
            throw new Error(err);
          });
      };

      getSpeciesData = () => {
        console.log(this.state.species); 
        const species = this.state.species; // at this point they are just URL's.
        if(this.state.speciesData.length){
            this.setState({speciesData: []}); 
            
            
        } else {
            this.getSpecies(species)
        }
        
    }


    render () {
        let species = this.state.speciesData; 
        console.log(this.props.species); 
        return (
            <div>
                <button onClick = {this.getSpeciesData}>Species</button>
                {species.map((specie, i ) => <Specie key= {i} specieName = {specie.name} classification = {specie.classification} averageHeight = {specie.average_height}
                skinColor = {specie.skin_colors} hairColor = {specie.hair_colors} eyeColors = {specie.eyeColors} averageLifespan = {specie.average_lifespan}
                homeworld = {specie.homeworld} language = {specie.language} characterName = {this.props.characterName}/>)}
                
            </div>
        );


    }
}

export default Species; 