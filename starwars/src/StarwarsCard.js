import React from 'react';

const StarwarsCard = (props) => {
    return (
    <div className = "Starwars-container"> 
        {props.card.map((cards) => {
            return(
                <div  className = "Starwars-cards"> 
                    <div className = "Starwars-name">
                        <p1 className = "Starwars-name"> {cards.name}</p1>
                        </div>
                        <div >
                        <p1 className = "Starwars-element"> Height: {cards.height} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Mass: {cards.mass} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Hair Color: {cards.hair_color} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Skin Color: {cards.skin_color} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Eye Color: {cards.eye_color} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Birth Year: {cards.birth_year} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Gender: {cards.gender} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Homeworld: <a href = {cards.homeworld}>{cards.homeworld} </a> </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Films: {cards.films.map((film) => {
                            return(
                                <div>
                                <p1 className = "Starwars-element">  <a href = {film}> {film} </a>  </p1>
                                </div>
                            );             
                        })} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Species: {cards.species.map((spec) => {
                            return(
                                <div>
                                <p1 className = "Starwars-element"> <a href = {spec}> {spec} </a> </p1>
                                </div>
                            );
                        })}</p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Vehicles: {cards.vehicles.map((vehicle => {
                            return(
                                <div>
                                <p1 className = "Starwars-element"> <a href = {vehicle}> {vehicle} </a></p1>
                                </div>
                            );
                        }))} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> StarShips: {cards.starships.map((starship) => {
                            return(
                                <div>
                                <p1 className = "Starwars-element"> <a href = {starship}> {starship} </a> </p1>
                                </div>
                            );
                        })} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Created: {cards.created} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Edited: {cards.edited} </p1>
                        </div>
                        <div>
                        <p1 className = "Starwars-element"> Url: <a href = {cards.url}> {cards.url}</a> </p1>
                        </div>
                </div>
            );
        })}
    </div>
    );
}

export default StarwarsCard
