import React from 'react';

const InfoList = props => {
    return (
        <div 
        className="info-form"
        >
        <h4>Name: {props.name}</h4>
        <h4>Gender: {props.gender}</h4>
        </div>
    );
};

export default InfoList;