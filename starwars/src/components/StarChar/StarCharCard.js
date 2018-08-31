import React from 'react';

function StarCharCard(props) {
    return(
        <div className="Character" >
            <div className="something" >
                <h1 className="name" >{props.item.name}</h1>
                <hr className="line" ></hr>
                <div className="content">
                    <h3>Gender: {props.item.gender}</h3>
                    <h3>Height: {props.item.height} cm</h3>
                </div>
                
                <img className="image" src="http://www.kinyu-z.net/data/wallpapers/92/1022423.png" alt="none" ></img>
            </div>
        </div>
    );
};


export default StarCharCard;