import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./SwCard"
import "./App.css";

export default function Swcards() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(res => {
            const swChar = res.data.results;
            console.log(swChar);
            setCard(swChar);
          })
          .catch(err => console.log(`There error is: ${err}`));
          },[]);   

      return (
        <div>
        {card.map(char => {
          return (
            <SwCard
            key={char.name}
            name={char.name}
            height={char.height}
            />
          );
        })}
        </div>
      );
}