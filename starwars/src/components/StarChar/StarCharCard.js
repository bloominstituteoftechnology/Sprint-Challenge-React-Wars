import React from 'react';

function StarCharCard(props) {
    return(
        <div className="Character" >
            <div className="name" >
                <h1>Name: {props.item.name}</h1>
            </div>
            <div className="gender">
            <h1>Gender: {props.item.gender}</h1>
            </div>
        </div>
    );
};


export default StarCharCard;