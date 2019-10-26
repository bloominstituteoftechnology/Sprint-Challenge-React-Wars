import React from "react";

const SwCard = props => {

    return (
        <>
        <div key={props.name}>
            
            <h1>{props.name}</h1>

            <h3>{props.height}</h3>

        </div>
        </>
    );
};

export default SwCard;