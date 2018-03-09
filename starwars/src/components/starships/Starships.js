import React, { Component } from 'react';

class Starships extends Component{

    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div>
                {this.props.starship}
            </div>
        );
    }
}

export default Starships;