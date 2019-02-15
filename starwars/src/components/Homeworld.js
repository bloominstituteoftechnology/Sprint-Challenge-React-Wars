import React from 'react';
import PlanetInfo from './PlanetInfo'

class Homeworld extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: props.homeworld,
      homeworld: [],
    }
  }
  componentDidMount() {
    this.getHomeworld(this.state.url);
  }

  getHomeworld = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
    // .then(res => {
    //   return res.json();
    // })
    .then(res => res.text())
    // .then(text=> console.log(text))
    .then(text => {
      this.setState({
        homeworld: JSON.parse(text),
        });
        // console.log(this.state.homeworld);
    })
    .catch(err => {
      throw new Error(err);
    });

  };
  render(){
    return(
      // <div className='homeworld'>{this.state.homeworld}</div>
      <PlanetInfo homeworld={this.state.homeworld} />
    )
  }
}

export default Homeworld;
