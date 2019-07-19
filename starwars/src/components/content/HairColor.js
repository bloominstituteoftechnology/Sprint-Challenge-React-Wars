import React from 'react'

const HairColor = ({hairColor}) => {
    return <p>{(hairColor==='n/a') ? `` : `Hair: ${hairColor}`}</p>
}

export default HairColor