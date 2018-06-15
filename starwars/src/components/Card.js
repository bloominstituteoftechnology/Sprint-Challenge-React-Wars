import React from "react";

const Card = props => {
    return <div
        key={props.charData.created}
    >
        <div>
            {props.charData.name}
            <div> &nbsp; </div>
                <div>Birthdate: {props.charData.birth_year}</div>
                <div>Gender: {props.charData.gender}</div>
                <div>Height: {props.charData.height}</div>
                <div>Mass: {props.charData.mass}</div>
            <div> &nbsp; </div>
        </div>
    </div>;
}

export default Card;