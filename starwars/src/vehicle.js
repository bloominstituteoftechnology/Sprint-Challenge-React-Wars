import React, { Component } from 'react';



class Vehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {



        return (
            <div>
                {this.props.vehicleProps}
            </div>

        )

    }
}
export default Vehicle;
