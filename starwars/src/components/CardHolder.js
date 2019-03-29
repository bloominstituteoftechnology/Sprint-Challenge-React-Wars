import React from "react";
import Card from "./Card";
import './StarWars.css';
 const CardHolder = props => {
    return (
        <div className="card-holder">
            {props.characters.map(c => {
                return (
                    <Card key={c.id} character={c} />
                );
            })}
        </div>
    )
}
 export default CardHolder;