import React from 'react';
import CharTrait from './CharTrait.js';


class Char extends React.Component {
   constructor(props){
       super(props);
       
       this.state = {
           traits: new Map(Object.entries(props.star))
       };
       console.log(this.state.traits);
   }    
  

    render(){
        
        return (
            <div>Char</div>
        )
    }
};

export default Char;