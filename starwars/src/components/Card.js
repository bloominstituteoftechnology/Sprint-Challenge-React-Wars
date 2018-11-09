import React from 'react';
import './Card.css';
import SubElement from './SubElement'

function Card(props){

    let {name,...rest} = props.item;

    return(
        <div className="indiv-card">
            <h2 className="header">{name}</h2>
            {
                Object.keys(rest).map((keyName) => {
                    if(keyName==="films" || keyName==="species" || keyName==="starships"|| keyName==="vehicles"){
                        return( <SubElement arrayName={keyName} array={rest[keyName]}/> ); 
                        
                    } else if(!(keyName=== "homeworld" || keyName==="url" )){
                        return (
                            <React.Fragment>
                                <p>{keyName}:{rest[keyName]}</p>
                            </React.Fragment>
                        );
                    }
                 })
            }
             
        </div>
    );
}

export default Card;

// props.item.forEach(element => {
//     return `<div className="indiv-card">${element}</div>`
// })

