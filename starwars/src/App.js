import React, { Component } from 'react';
import './App.css';	import './App.css';
import Card from './components/Cards.js';
import Pagenavigation from './components/Pagenavigation.js';


 function next (state, props) {
  return {
   url: state.nextUrl
  };
};

 function prev (state, props) {
  return {
   url: state.prevUrl
  }; 
};
 
class App extends Component {
  constructor() {
     super();
  
    this.state = {
      starwarsChars: [],
      url: 'https://swapi.co/api/people/?page=1',
      nextUrl: null,
      prevUrl: null
    };	    
  }	  

  componentDidMount() {
    this.getCharacters();
  }
  
  getCharacters = () => {
   fetch(this.state.url)
    .then(res => {	      
      return res.json();	        
    })	      
     .then(data => {	      
      this.setState({ nextUrl: data.next });
      this.setState({ prevUrl: data.previous });
      this.setState({ starwarsChars: data.results });	       
    })	      
     .catch(err => {	      
      throw new Error(err);	        
    });	      
  };

  handleNext() {
   this.setState(next, this.getCharacters);
  }

  handlePrev() {
   this.setState(prev, this.getCharacters);
  }
  
  render() {	  
    return (	    
      <div className="App">	      
        <h1 className="Header">React Wars</h1>	        
        <Pagenavigation 
          next={this.handleNext.bind(this)}
          prev={this.handlePrev.bind(this)}  
        />
        <Card starwarsChars={this.state.starwarsChars} />
      </div>	      
    )	    
  };	  
  
}


export default App;