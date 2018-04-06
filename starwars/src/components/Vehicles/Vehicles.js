import React from 'react';

const Vehicles = props => {
    return (
        <div>
            {props.vehicles.length > 0 ? 'Vehicles:'  : 'No Vehicles'}
            {props.vehicles.map(vehicle => (
                <div>
                    <img src={vehicle}/>
                </div>
            ))}
        </div>
    );
};

export default Vehicles