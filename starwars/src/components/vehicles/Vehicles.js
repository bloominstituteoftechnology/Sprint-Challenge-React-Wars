import React, { Component } from 'react';

class Vehicles extends Component{
    render(){
        return(
            <div>{this.props.vehicle}</div>
        );
    }
}

export default Vehicles;