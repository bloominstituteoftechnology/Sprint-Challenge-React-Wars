import React from 'react';
import './Card.css';

export const Card = (props) => {
    const item = props.item; 
    return ( 
        <div className="items-box">
            <div className="name">{console.log( item)}</div>
            <div className="name"><span>{item.name}</span></div>
            <div className="height"><span></span></div>
            <div className="DOB"><span></span></div>
            <div className="Gender"><span></span></div>
        </div>
    );
}
