import React from 'react';
import './StarWars.css';

 const StarCard = (props) =>{
        const charInfo = props.data;
   return(
       <div className="starCardContainer" >
        <div className="starCardTitleBar"onClick={props.methods} >
            {charInfo.name}
        </div>
        <div className= "starCardBody">
        <div className="birthYear">Birth Year:<br/> {charInfo.birth_year}</div>
        <div className="eyeColor">Eye Color: <br/> {charInfo.eye_color}</div>
        <div className={  charInfo.hair_color === 'n/a' ? 'hidden hairColor':'hairColor'}>Hair Color:<br/> {charInfo.hair_color}</div>
        <div className={  charInfo.gender === 'n/a' ? 'hidden gender':'gender'}>Gender: <br/>{charInfo.gender}</div>
        <div className="height">Height: <br/>{charInfo.height}</div>
        <div className="mass">Mass:<br/> {charInfo.mass}</div>




        </div>
       </div>
   )
}


export default StarCard;