import React from 'react'

export default (props) => {
  return (
    <option value={props.name}>
      {props.name}
    </option>
  )
}
