import React, { Component } from 'react';
import Time from './time';
const StarWars= props =>{
    return(
        props.starwarsChars.map((item)=>{
            return(
                <div className='container'>
                    <div className="name">
                        <h1>{item.name}</h1>
                    </div>
                    <Time 
                        created={item.created}
                        edited={item.edited}
                    />
                </div>
            ) 
        })
    )
}
export default StarWars;