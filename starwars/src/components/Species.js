import React from 'react'

const Species = (props) => {
  return (
    <div>
      {props.species.map(group => (
        <div>{group}</div>
      ))}
    </div>
  )
}
export default Species