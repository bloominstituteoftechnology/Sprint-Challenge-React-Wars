import React, { Component } from 'react';
import './linkdisplay.css';

const Linking = props => {
    console.log('linking props', props.data[props.planet - 1])
return( 
    
<div><li>Pop Quiz</li>
<li className='display-none'>{props.planet - 1}</li>
<li>where is my homeworld?</li>
{props.data.map((u, index) => <div><li key={u + index} 
className='display-default'>{u.name}</li>
<li className='display-none'>{u.name + index}</li></div>)}</div> )
}



class LinkDisplay extends Component {
    constructor() {
      super();
      this.state = {
        links: []
      };
    }
    componentDidMount() {

        fetch('https://swapi.co/api/planets/')
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ links: data.results });
          })
          .catch(err => {
            throw new Error(err);
          });
      }
      render() {
        return (
          <div className="innerlink">
            <Linking data={this.state.links} planet={this.props.planet}/>
            
          </div>
        );
      }
    }

    export default LinkDisplay;