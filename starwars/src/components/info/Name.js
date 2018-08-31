import React from 'react';
import './info.css';

const Name = (props) => {

    return (
       <div>
            <h1>Name: {props.starwarsChar.name}</h1>
       </div>
    )
}

export default Name;