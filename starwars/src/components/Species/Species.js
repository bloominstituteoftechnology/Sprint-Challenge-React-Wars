import React from 'react';

const Species = props => {
    return (
        <div>
            Species
            {props.species.map((specie, index) => (
                <div key={specie + index}>
                    <img src={specie} alt='species'/>
                </div>
            ))}
        </div>
    );
};

export default Species