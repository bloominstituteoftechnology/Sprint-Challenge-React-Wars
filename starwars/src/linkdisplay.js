import React, { Component } from 'react';

const Linking = props => {
    console.log('linking props', props)
return( 
    
<div><li>Pop Quiz</li>
<li>where is my homeworld?</li>
{props.data.map((u, index) => <li key={u + index}>{u.name}</li>)}</div> )
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
            <Linking data={this.state.links} />
            
            
          </div>
        );
      }
    }

    export default LinkDisplay;