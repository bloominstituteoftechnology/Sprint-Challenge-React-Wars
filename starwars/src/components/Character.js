import React from 'react';
import List from "./List";

const Character = (props) => {


    return (
        <ul>{props.data.map(item => {
            //Item is an object
            return <List item={item}/>
        })}
        </ul>
    )
}

export default Character