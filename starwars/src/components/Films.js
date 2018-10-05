import React from 'react'

const Films = (props) => {
  return (
    <div>
      {props.films.map(film => (
        <div>{film.film}</div>
      ))}
    </div>
  )
}
export default Films