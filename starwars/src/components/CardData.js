import React from "react";
import Name from "./Name";


function CardData (props) {

    
    
    console.log(props.data)
    return (
       <Name name={props.data.name}/>

    )


    
};

export default CardData;