import React, { Component } from 'react';


class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: props.vehicles
    };
  }

  // componentDidMount() {
  //   this.setState({vehicles: vehicles});
  // }

  render() {
    return (
      <div>
          <div className='SubSectionTitle'>Vehicles</div>
          {this.state.vehicles.map((vehicle, i) => {
            return (
              <div key={vehicle + i} className="SubSectionLink"><a href={vehicle}>Vehicle {i + 1}</a></div>
              // <div key={vehicle.name + i} className="vehicleCard">
              //   <div className="VehicleName" >{vehicle.name}</div>
              //   <div className="Specs">
              //     <div className="Specs_title">Vehicle Specifications</div>
              //     <div className="Spec_Items">
              //       <div className="Spec">Model: {vehicle.model}</div>
              //       <div className="Spec">Class: {vehicle.vehicle_class}</div>
              //       <div className="Spec">Manufacturuer: {vehicle.manufacturuer}</div>
              //       <div className="Spec">Length: {vehicle.length}</div>
              //       <div className="Spec">Crew: {vehicle.crew}</div>
              //       <div className="Spec">Passengers: {vehicle.passengers}</div>
              //       <div className="Spec">Cargo Capacity: {vehicle.cargo_capacity}</div>
              //       <div className="Spec">Consumables: {vehicle.consumables}</div>
              //       <div className="Spec">Cost in Credits: {vehicle.cost_in_credits}</div>
              //     </div>
              //   </div>
              // </div>
            )
          })}
      </div>
    );
  }
}

export default Vehicles;
