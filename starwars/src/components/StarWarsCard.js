import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsStuff from './StarWarsStuff';
import './StarWars.css';

function StarWarsCard() {
    const [cards, setCard] = useState([]);
    const [counter, updateCounter] = useState(2);



    useEffect(() => {
        axios
             .get(`https://swapi.co/api/people/${counter}/`)
            .then(response => {
                setCard([...cards, response.data]);
                updateCounter(counter + 1);
            })
            .catch(error => {
                console.log("error!", error);
            });
    },[counter]);


    return (
        <div className="container">
            <div className="entry">
                {cards.map((card, index) => {
                    return (
                        <StarWarsStuff
                            key={index}
                            name={card.name}
                            gender={card.gender}
                            birth_year={card.birth_year}
                            height={card.height}
                            mass={card.mass}
                            hair={card.hair_color}
                            skin={card.skin_color}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default StarWarsCard;