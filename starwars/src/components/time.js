import React, {Component} from 'react'
const Time= props=>{
    return(
        <div>
            <div className='title'>
            <h2>
                Time info
            </h2>
            </div>
            <p className='info'>
                <b>Created:</b>{props.created}
            </p>
            <p className='info'>
                <b>Edited:</b>{props.edited}
            </p>
        </div>
    )
}
export default Time;