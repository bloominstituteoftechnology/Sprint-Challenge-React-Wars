import React from 'react';
import Card from './Card';
import './StarWars.css';

const CardList = (props) => {
    return (
        <div className="cards-container">
        {console.log(props.onClickHandler)}
          {props.starwarsChars.map((character,index) => <Card key={index}character={character} id={index} onClick={props.onClickHandler}/>)}
        </div>
    )
}

export default CardList;