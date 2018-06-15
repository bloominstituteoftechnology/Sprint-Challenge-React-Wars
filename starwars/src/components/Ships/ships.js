import React from 'react';

const Ships = props => {
    return (
        <div>
            {props.ships.length > 0 ? 'ships:' : 'No Ships'}
            {props.ships.map((ship, index) => (
                <div key={ship + index}>
                    <img src={ship} alt='ship'/>
                </div>
            ))};
        </div>
    );
};

export default Ships;