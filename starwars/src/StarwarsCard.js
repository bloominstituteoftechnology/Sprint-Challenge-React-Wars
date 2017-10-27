import React from 'react'

const StarwarsCard = (props) => {
    return (
    <div className = "Starwars-container"> 
        {props.card.map((cards) => {
            return(
                <div  className = "Starwars-cards"> 
                    <div>
                    <h1 className = "Starwars-element"> {cards.name}</h1>
                        <p1 className = "Starwars-element"> Height: {cards.height} </p1>
                        <p2 className = "Starwars-element"> Mass: {cards.mass} </p2>
                        <p3 className = "Starwars-element"> Hair Color: {cards.hair_color} </p3>
                        <p4 className = "Starwars-element"> Skin Color: {cards.skin_color} </p4>
                        <p5 className = "Starwars-element"> Eye Color: {cards.eye_color} </p5>
                        <p6 className = "Starwars-element"> Birth Year: {cards.birth_year} </p6>
                        <p7 className = "Starwars-element"> Gender: {cards.gender} </p7>
                        <p8 className = "Starwars-element"> Homeworld: {cards.homeworld} </p8>
                        <p9 className = "Starwars-element"> Films: {cards.films.map((film) => {
                            return(
                                <p1 className = "Starwars-element">{film} </p1>
                            );             
                        })} </p9>
                        <p10 className = "Starwars-element"> Species: {cards.species.map((spec) => {
                            return(
                                <p1 className = "Starwars-element"> {spec} </p1>
                            );
                        })}</p10>
                        <p11 className = "Starwars-element"> Vehicles: {cards.vehicles.map((vehicle => {
                            return(
                                <p1 className = "Starwars-element"> {vehicle} </p1>
                            );
                        }))} </p11>
                        <p12 className = "Starwars-element"> StarShips: {cards.starships.map((starship) => {
                            return(
                                <p1 className = "Starwars-element"> {starship} </p1>
                            );
                        })} </p12>
                        <p13 className = "Starwars-element"> Created: {cards.created} </p13>
                        <p14 className = "Starwars-element"> Edited: {cards.edited} </p14>
                        <p15 className = "Starwars-element"> Url: {cards.url} </p15>
                       
                    </div>
                </div>
            );
        })}
    </div>
    );
}

export default StarwarsCard
