import React from 'react';
import Species from './Species.js'

class Classification extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        url: props.species,
        species: [],
      }
    }
    componentDidMount() {
      console.log(this.state.url);
      this.getSpecies(this.state.url);
      console.log(this.state.species);
    }

    getSpecies = URL => {
      fetch(URL).then(res => {
        return res.json();
      }).then(data => {
        this.setState({
          species: data.results,
        });
      }).catch(err => {
        throw new Error(err);
      });
    };


    render(){
      return(
        // <div className='homeworld'>{this.state.homeworld}</div>
        <Species species={this.state.species} />
      )
    }
}

export default Classification;
