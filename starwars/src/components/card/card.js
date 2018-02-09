import React from 'react';
import './card.css'

function Card(props) {
    const side = props.index;
    
    return (
        <div className="Card" style={side === 3 ? {background:'darkred', color:'white'} : {background:'lightblue', color:'black'}}>
            {/* This is ugly, I know, but every function I tried broke */}
            {side === 0 ? <img src="http://2.bp.blogspot.com/-jgguBhXnQkg/T3E4YYwmJII/AAAAAAAAD5s/nNzhAjac0Jk/s1600/2LSkywalker.jpg" alt={props.character.name} />: null }
            {side === 1 ? <img src="http://cdn1.sciencefiction.com/wp-content/uploads/2015/06/Star-Wars-C-3PO-thumb.jpg" alt={props.character.name} />: null }
            {side === 2 ? <img src="https://tse4.mm.bing.net/th?id=OIP.13GHhFlRrOU8AfUrlJlhhgHaHe&pid=15.1&P=0&w=300&h=300" alt={props.character.name} />: null }
            {side === 3 ? <img src="https://tse2.mm.bing.net/th?id=OIP.GWoehYrPuzhMJQnHKg9YlgHaFj&pid=15.1&P=0&w=218&h=164" alt={props.character.name} />: null }
            {side === 4 ? <img src="https://media1.popsugar-assets.com/files/thumbor/hMr-O1jNmZ1ix_D2OFjp3mSe0bA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/12/15/988/n/1922283/64e56bac183e8a95_leia.JPG" alt={props.character.name} />: null }
            {side === 5 ? <img src="http://1.bp.blogspot.com/_DSs2bX13hVc/TIabMkyi8NI/AAAAAAAACg0/VrFCFHms_fo/s400/OwenLars3.jpg" alt={props.character.name} />: null }
            {side === 6 ? <img src="http://images3.wikia.nocookie.net/__cb20111029215431/starwars/images/7/76/Beru_headshot2.jpg" alt={props.character.name} />: null }
            {side === 7 ? <img src="http://rsc2.saatscommerce.com/img5520b21a0ca24_l.jpg" alt={props.character.name} />: null }
            {side === 8 ? <img src="https://tse3.mm.bing.net/th?id=OIP.PexI6VmbR6M1nV8ogN6ciQHaHa&pid=15.1&P=0&w=300&h=300" alt={props.character.name} />: null }
            {side === 9 ? <img src="http://www.internationalhero.co.uk/o/obiwan2.jpg" alt={props.character.name} />: null }
            <h1>{props.character.name}
            </h1>
            <div className="Card-Info-Block">
                <div className="Card-Info-Item">Gender: {props.character.gender}</div>
                <div className="Card-Info-Item">Born: {props.character.birth_year}</div>
                <br /><br />
                <div>Skin Color: {props.character.skin_color}</div>
                <div>Eye Color: {props.character.eye_color}</div>
                <div>Hair Color: {props.character.hair_color}</div>
                <br /><br />
                <div className="Card-Info-Item">Height: {props.character.height}</div>
                <div className="Card-Info-Item">Mass: {props.character.mass}</div>
            </div>
        </div>
    );
}

export default Card;