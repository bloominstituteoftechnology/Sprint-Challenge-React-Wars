import React from 'react'

const StarwarsCard = (props) => {
    return (
    <div className = "Starwars-container"> 
        {props.card.map((cards) => {
            return(
                <div  className = "Starwars-cards"> 
                    <div>
                        <h1 className = "Starwars-element"> {cards.name}</h1>
                        <h3 className = "Starwars-element"> Height: {cards.height} </h3>
                        <h3 className = "Starwars-element"> Mass: {cards.mass} </h3>
                        <h3 className = "Starwars-element"> Hair Color: {cards.hair_color} </h3>
                        <h3 className = "Starwars-element"> Skin Color: {cards.skin_color} </h3>
                        <h3 className = "Starwars-element"> Eye Color: {cards.eye_color} </h3>
                        <h3 className = "Starwars-element"> Birth Year: {cards.birth_year} </h3>
                        <h3 className = "Starwars-element"> Gender: {cards.gender} </h3>
                        <h3 className = "Starwars-element"> Homeworld: <a href = {cards.homeworld}>{cards.homeworld} </a> </h3>
                        <h3 className = "Starwars-element"> Films: {cards.films.map((film) => {
                            return(
                                <h5 className = "Starwars-element">  <a href = {film}> {film} </a>  </h5>
                            );             
                        })} </h3>
                        <h3 className = "Starwars-element"> Species: {cards.species.map((spec) => {
                            return(
                                <p1 className = "Starwars-element"> <a href = {spec}> {spec} </a> </p1>
                            );
                        })}</h3>
                        <h3 className = "Starwars-element"> Vehicles: {cards.vehicles.map((vehicle => {
                            return(
                                <h5 className = "Starwars-element"> <a href = {vehicle}> {vehicle} </a></h5>
                            );
                        }))} </h3>
                        <h3 className = "Starwars-element"> StarShips: {cards.starships.map((starship) => {
                            return(
                                <h5 className = "Starwars-element"> <a href = {starship}> {starship} </a> </h5>
                            );
                        })} </h3>
                        <h3 className = "Starwars-element"> Created: {cards.created} </h3>
                        <h3 className = "Starwars-element"> Edited: {cards.edited} </h3>
                        <h3 className = "Starwars-element"> Url: <a href = {cards.url}> {cards.url}</a> </h3>
                        
                    </div>
                </div>
            );
        })}
    </div>
    );
}

export default StarwarsCard
