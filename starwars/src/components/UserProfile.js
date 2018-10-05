import React, {Component} from 'react'
const UserProfile= props=>{
    return(
        <div className='title'>
            <h2>
                User Profile
            </h2>
            <p className='info'>
                <b>Birth year:</b>{props.birthYear}
            </p>
            <p className='info'>
                <b>Gender:</b>{props.gender}
            </p>
            <p className='info'>
                <b>Height:</b>{props.height}
            </p>
            <p className='info'>
                <b>Mass:</b>{props.mass}
            </p>
        </div>
    )
}
export default UserProfile;