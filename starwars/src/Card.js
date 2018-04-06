import React from 'react';

const Card = props => {
  return (
    <div>
      {props.chars.map((char, index) => (
        <div className="card">
          <div className="card_personInfo">
            <div className="personInfo_name"><strong>Name:</strong> {char.name}</div>
            <div className="personInfo_gender"><strong>Gender:</strong> {char.gender}</div>
            <div className="personInfo_height"><strong>Height:</strong> {char.height}</div>
            <div className="personInfo_mass"><strong>Mass:</strong> {char.mass}</div>
            <div className="personInfo_hairColor"><strong>Hair Color:</strong> {char.hair_color}</div>
            <div className="personInfo_eyeColor"><strong>Eye Color:</strong> {char.eye_color}</div>
            <div className="personInfo_homeworld"><strong>Homeworld:</strong> {props.fetchData(char.homeworld)}</div>
          </div>
          <div className="card_personPic"></div>
        </div>
      ))}
    </div>
  )
}

export default Card;