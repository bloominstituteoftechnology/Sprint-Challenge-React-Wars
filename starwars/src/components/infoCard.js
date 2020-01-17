  
import React from 'react';
import Card from './Card';
import './StarWars.css';

const InfoCard = ((props) => {
    
    return (
        <div className="infoCard">
            <Card characterInfo={props}/>
        </div>
    );
} )

export default InfoCard;