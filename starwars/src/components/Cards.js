import React from "react"
import './StarWars.css';


const Cards = props => {
    return (
        <div className="cards">
            <h2 className="title">{props.data.name}</h2>
            <p className="listItem"><strong>Gender</strong>:{props.data.gender}</p>
            <p className="listItem"><strong>Hair Color</strong>:{props.data.hair_color}</p>
            <p className="listItem"><strong>Eye Color</strong>:{props.data.eye_color}</p>
            <p className="listItem"><strong>Height</strong>:{props.data.height}</p>
            <p className="listItem"><strong>Skin Color</strong>:{props.data.skin_color}</p>
            <p className="listItem"><strong>Date of Birth</strong>:{props.data.birth_year}</p>
            <p className="listItem"><strong>Species</strong>:{props.data.species}</p>
            <p className="listItem"><strong>Edited</strong>:{props.data.edited}</p>
            <p className="listItem"><strong>Created</strong>:{props.data.created}</p>
            <p className="listItem"><strong>URL</strong>:{props.data.url}</p>

        </div>
    )
}

export default Cards;