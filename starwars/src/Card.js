import React from 'react';

const Card = (props) => {
    return (
    <div className = "sw-container"> 
    {props.card.map((cards) => {
        return(
        <div  className = "sw-card">
        <div className = "sw-name">
            <p1 className = "sw-name"> {cards.name}</p1>
        </div>
        <div>
            <p1 className = "sw-element"> Height: {cards.height} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Mass: {cards.mass} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Hair Color: {cards.hair_color} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Skin Color: {cards.skin_color} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Eye Color: {cards.eye_color} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Birth Year: {cards.birth_year} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Gender: {cards.gender} </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Homeworld: <a href = {cards.homeworld}>{cards.homeworld} </a> </p1>
        </div>
        <div>
            <p1 className = "sw-element"> Films: {cards.films.map((film) => {
                return(
                    <div>
                        <p1 className = "sw-element">  <a href = {film}> {film} </a>  </p1>
                    </div>
                    );
                    })}</p1>
                    </div>
                    <div>
                       <p1 className = "sw-element"> Species: {cards.species.map((spec) => {
                           return(
                               <div>
                                   <p1 className = "sw-element"> <a href = {spec}> {spec} </a> </p1>
                               </div>
                               );
                               })}</p1>
                               </div>
                               <div>
                                   <p1 className = "sw-element"> Vehicles: {cards.vehicles.map((vehicle => {
                                       return(
                               <div>
                               <p1 className = "sw-element"> <a href = {vehicle}> {vehicle} </a></p1>
                               </div>
                           );
                       }))} </p1>
                       </div>
                       <div>
                       <p1 className = "sw-element"> StarShips: {cards.starships.map((starship) => {
                           return(
                               <div>
                                   <p1 className = "sw-element"> <a href = {starship}> {starship} </a> </p1>
                               </div>
                           );
                       })} </p1>
                       </div>
                       <div>
                           <p1 className = "sw-element"> Created: {cards.created} </p1>
                       </div>
                       <div>
                           <p1 className = "sw-element"> Edited: {cards.edited} </p1>
                       </div>
                       <div>
                           <p1 className = "sw-element"> Url: <a href = {cards.url}> {cards.url}</a> </p1>
                       </div>
               </div>
           );
       })}
   </div>
   );}


export default Card