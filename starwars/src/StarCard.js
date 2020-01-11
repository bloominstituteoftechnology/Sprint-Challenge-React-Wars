import React from 'react';




const StarCard = (props) => {
    return (
        <div className="starwars-info-rendering">

        <h3>{props.information.name}</h3>
        <h3>{props.information.height}</h3>
        <h3>{props.information.birth_year}</h3>
        <h3> {props.information.gender}</h3>
        </div>
    )

}

export default StarCard;