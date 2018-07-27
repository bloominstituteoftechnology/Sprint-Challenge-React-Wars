import React from 'react';
import CharTrait from './CharTrait.js';
import './Char.css';


class Char extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            character: props.star,
            unwantedTraits: [
                'name', 'url', 'homeworld', 'films', 'vehicles', 'starships', 'created', 'edited'
            ]
        };
    }
    


    render(){
        return (
            <div className="character-container">
                <div>{this.state.character.name}</div>
                {Object.keys(this.state.character).map((k) => {
                    this.state.unwantedTraits.forEach((unwant, i)=>{

                        console.log(typeof this.state.unwantedTraits[i]);
                    })
                    
                })}
            </div>
           
        )
    }
};

export default Char;