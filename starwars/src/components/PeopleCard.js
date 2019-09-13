import React from "react";

//{name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
const PeopleCard = props => {
    if(!props.data) return (<></>);

    console.log("props: ",props);
    console.log("props.name", props.data.name);
    return (
        <div className="peopleCard">
            <p><span>Name: </span>{props.data.name}</p>
            <p><span>Height: </span>{props.data.height}</p>
            <p><span>Mass: </span>{props.data.mass}</p>
            <p><span>Hair Color: </span>{props.data.hair_color}</p>
            <p><span>Skin color: </span>{props.data.skin_color}</p>
        </div>
    )
}

export default PeopleCard;