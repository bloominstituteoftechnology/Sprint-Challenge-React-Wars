import React from 'react';
import './StarWars.css';

class Films extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      films: []
    };
  }
  render(){
    console.log(this.props)
    return (
      <div>
        <a href={this.props.film}><p> {this.props.film}</p></a>
      </div>
    )
  }
}

export default Films;
