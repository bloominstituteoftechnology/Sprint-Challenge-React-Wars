import React, {Component} from 'react';

class VehicleSection extends Component {
    constructor() {
        super();
        this.state = {
            vehicles:[]
        };
    }
    componentDidMOunt() {
        this.setState({vehicles: this.props.vehicles})
}
 render () {
     return (
         <div className="vehicles-section">
         {this.state.vehicles ? this.state.vehicles.map((vehicle,i) => (
            <div className="vehicles" key={i}>
            <div className="vehicle-list">
            <ul>{vehicle.vehicles}</ul></div>
            </div>)
         ) : null}
            </div>
        );
    }
}
 export default VehicleSection;