import React from "react";
import Card from "./Card"

const CardList = props => {
    return (
        <div className="card-list-container">
            {props.charProps.map(char => {
                return <Card charData={char}/>
        })}
        </div>
    );
};

export default CardList;