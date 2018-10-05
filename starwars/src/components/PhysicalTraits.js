import React, {Component} from 'react'
const PhysicalTraits= props=>{
    return(
        <div className='title'>
            <h2>
                Physical Traits
            </h2>
            <p className='info'>
                <b>Eyes color</b>{props.created}
            </p>
            <p className='info'>
                <b>Hair color</b>{props.edited}
            </p>
            <p className='info'>
                <b>Skin color</b>{props.edited}
            </p>
        </div>
    )
}
export default PhysicalTraits;