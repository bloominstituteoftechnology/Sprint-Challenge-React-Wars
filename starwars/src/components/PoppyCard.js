import React from 'react';
import './StarWars.css';


function PuppyCard(props){
    const data = props.data
    return(
        <div className="card">
            <h1>{data.name}</h1>
            <img src = {data.imageUrl} alt = {`${data.name}-image`}/>
        </div>
    )
}

export default PoppyCard;