import React from 'react'; 
import './StarWars.css';


class Film extends React.Component {
    constructor(){
        super()
        this.state = {}
    }




    render() {


        return (
            <div>
                <h3>{this.props.title} realsed {this.props.released} directed by {this.props.director} produced by {this.props.producer}</h3>
                <br/> 
            </div>
        ); 

    }

}

export default Film; 