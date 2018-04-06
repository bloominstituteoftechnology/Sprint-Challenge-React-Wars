import React from 'react';
import './profile.css';

export class Profile extends React.Component{
  constructor(){
    super();
    this.state={
      dogs:[],
    };
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      return res.json();
    })
    .then(json => {
      const {dogs} = this.state;
      dogs.push(json.message);
      this.setState({dogs: dogs});
    })
  }
  render(){
    return (
      <React.Fragment>
        {this.state.dogs.map((dog) => (
          <div class='Container'>
            <img src={dog}/>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
