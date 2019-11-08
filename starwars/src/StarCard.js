import React from 'react';

const StarCard = (props) => {
    return (
        <div className="starwars-info-rendering">

        <h2>The info from StarCard is making it. </h2>
        <h3> {props.name} </h3>
        </div>
    )

}

export default StarCard;