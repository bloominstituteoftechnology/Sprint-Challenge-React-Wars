import React from 'react'
import List from './films/filmsList'

export default (props) => {
  return (
    <div>
      <ul>
        <li>Films: <List filmList ={props.bio.films}/></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
