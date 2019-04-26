import React, {Component} from 'react'
const PhysicalTraits= props=>{
    return(
        <div >
            <div className='title'>
            <h2>
                Physical Traits
            </h2>
            </div>
            <p className='info'>
                <b>Eyes color:</b>{props.eyeColor}
            </p>
            <p className='info'>
                <b>Hair color:</b>{props.hairColor}
            </p>
            <p className='info'>
                <b>Skin color:</b>{props.skinColor}
            </p>
        </div>
    )
}
export default PhysicalTraits;