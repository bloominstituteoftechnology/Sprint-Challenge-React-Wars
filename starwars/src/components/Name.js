import React from 'react'

const Name = ({name}) => {
    if (!name) return <h1>Loading...</h1>
    return <h1>{name}</h1>
}

export default Name