import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="card_personInfo">
        <div className="personInfo_name"></div>
        <div className="personInfo_gender"></div>
        <div className="personInfo_height"></div>
        <div className="personInfo_mass"></div>
        <div className="personInfo_hairColor"></div>
        <div className="personInfo_eyeColor"></div>
        <div className="personInfo_homeworld"></div>
      </div>
      <div cnallName="card_personPic"></div>
    </div>
  )
}

export default Card;