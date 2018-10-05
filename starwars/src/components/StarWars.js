import React, { Component } from 'react';
import Time from './time';
import UserProfile from './UserProfile';
import PhysicalTraits from './PhysicalTraits';
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
                    <UserProfile 
                        birthYear={item.birth_year}
                        gender={item.gender}
                        height={item.height}
                        mass={item.mass}
                    />
                    <PhysicalTraits 
                       eyeColor={item.eye_color} 
                       hairColor={item.hair_color}
                       skinColor={item.skin_color}
                    />
                </div>
            ) 
        })
    )
}
export default StarWars;