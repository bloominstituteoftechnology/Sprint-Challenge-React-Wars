import React from "react";
import "./StarWars.css";

const Card = props => (
    <div className="card-container">
        <header>
            <h3 className="card-font-title"><a href={props.link}>{props.name}</a></h3>
        </header>
        <section className="card-font">
            <p>Species: {props.species}</p>
            <p>Homeworld: {props.homeworld}</p>
            <p>Gender: {props.gender}</p>
            <p>Birth Year: {props.birthyear}</p>
            <p>Hair Color: {props.hair}</p>
            <p>Eye Color: {props.eyes}</p>
            <p>Skin Color: {props.skin}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}kg</p>
            <div>
                Appears In:
                <ul>
                    {props.films.map(film => <li>{film}</li>)}
                </ul>
            </div>
            <div>
                Vehicles:
                <ul>
                    {props.ships.map(ship => <li>{ship}</li>)}
                    {props.vehicles.map(vehicle => <li>{vehicle}</li>)}
                </ul>
            </div>
        </section>
    </div>
);

export default Card;