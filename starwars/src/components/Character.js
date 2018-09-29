import React from 'react'


const Character = (props) => {
    return (
        <div data-id={props.obj.created}> 
    <div className='card'>
   {props.obj.name}
    </div>
    </div>
    )
}

export default Character