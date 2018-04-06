import React, { Component } from 'react';

const BioData = props => {
    return (
        <div>{props.charList.map((c) => (
            <div>{c.birth_year}</div>
        ))}</div>
    )
}


export default BioData;