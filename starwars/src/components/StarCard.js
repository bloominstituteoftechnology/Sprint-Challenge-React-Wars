import React from 'react';
import './StarWars.css';

 const StarCard = (props) =>{
        const charInfo = props.data;
   return(
       <div className="starCardContainer " >
        <div className="starCardTitleBar"onClick={props.methods} >
            {charInfo.name}
        </div>
        <div className= "starCardBody hidden">
        <div className="birthYear dataResult ">Birth Year:<br/> {charInfo.birth_year}</div>
        <div className="eyeColor dataResult">Eye Color: <br/> {charInfo.eye_color.charAt(0).toUpperCase() + charInfo.eye_color.slice(1)}</div>
        <div className={  charInfo.hair_color === 'n/a' ? 'hidden hairColor dataResult':'hairColor dataResult'}>Hair Color:<br/> {charInfo.hair_color.charAt(0).toUpperCase() + charInfo.hair_color.slice(1)}</div>
        <div className={  charInfo.skin_color === 'n/a' ? 'hidden skinColor dataResult':'skinColor dataResult'}>Skin Color:<br/> {charInfo.skin_color.charAt(0).toUpperCase() + charInfo.skin_color.slice(1)}</div>

        <div className={  charInfo.gender === 'n/a' ? 'hidden gender dataResult':'gender dataResult'}>Gender: <br/>{charInfo.gender.charAt(0).toUpperCase() + charInfo.gender.slice(1)}</div>
        <div className="height dataResult">Height: <br/>{charInfo.height}</div>
        <div className="mass dataResult">Mass:<br/> {charInfo.mass}</div>




        </div>
       </div>
   )
}


export default StarCard;