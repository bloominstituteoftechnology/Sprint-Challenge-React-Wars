import React from 'react'

const Gender = ({gender}) => {
    return <p>{(gender==='n/a') ? `` : `Gender: ${gender}`}</p>
}

export default Gender