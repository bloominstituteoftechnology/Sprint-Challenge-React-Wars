import React from 'react';
import './StarWars.css';

class Species extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      species: []
    }
  }

  componentDidMount(){
    this.getFilm(this.props.species);
  }

  getFilm = URL =>{
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({species: data});
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render(){
    console.log(this.state)
    return (
      <p>
        <span>Species: </span> {this.state.species.name}
      </p>
    )
  }
}

export default Species;
