import React from 'react';
import './Card.css';

function Card(props){
    const newArray = []
    for(let i in props.item){
        if(!(i=== "homeworld" || i==="url" || i==="films" || i==="species" || i==="starships"|| i==="vehicles")){
        newArray.push(`${i}: ${props.item[i]}`);
        }
    }
    // function SubElement(props){
    //     return(
    //         <ul>
    //             {
    //                 for(let i in props.item){
    //                     if(Array.isArray(props.item[i])){
    //                         return props.item[i].map(a => {<li>{a}</li>})
    //                     }
    //                 }
    //             }
    //         </ul>
    //     );
        
    // }
    return(
        <div className="indiv-card">
        {
            newArray.map(ele => {
                return <p>{ele}</p>
            })
        }
            {/* <SubElement /> */}
        </div>
    );
}

export default Card;

// props.item.forEach(element => {
//     return `<div className="indiv-card">${element}</div>`
// })

