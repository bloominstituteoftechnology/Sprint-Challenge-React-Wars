import React from 'react';
import './StarWars.css';



const StarCard = (props) => {
    return (
        <div className='cards'>
            <div>NAME:   {props.charData.name}</div>
            <div>HEIGHT: {props.charData.height}</div>
            <div>EYE COLOR: {props.charData.eye_color}</div>
            <div>SKIN TONE: {props.charData.skin_color}</div>
            <div>HAIR COLOR: {props.charData.hair_color}</div>
            <div>MASS/WEIGHT: {props.charData.mass}</div>
        </div>
    );
};

const FacePics = [
    <img src="./img/star-wars-luke-skywalker-tatooine.jpg" alt="Luke"/>, <img src="./img/C3po.jpg" alt="C3pO"/>, <img src="./img/r2d2-socialmedia.jpg" alt="R2D2"/>, <img src="./img/Darth Vader.webp" alt="Darth Vader"/>, <img src="./img/Star-Wars-Princess-Leia.jpg" alt="Leia"/>, <img src="./img/Owen_Lars.jpg" alt="Owen"/>, <img src="./img/Beru_Lars.png" alt="Beru"/>, <img src="./img/r5d4.jpg" alt="R5D4"/>, <img src="./img/biggs.jpeg" alt="Biggs"/>, <img src="./img/Ben_Kenobi.png" alt="Obi Wan"/>
];

export default StarCard;