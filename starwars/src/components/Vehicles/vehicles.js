import React from 'react';

const Vehicles = props => {
    return (
        <div>
            {props.vehicles.length > 0 ? 'Vehicles:' : 'No Vehicles'}
            {props.vehicles.map((vehicle, index) => (
                <div key={vehicle + index}>
                    <img src={vehicle} alt='vehicle'/>
                </div>
            ))};
        </div>
    );
};

export default Vehicles;