import React from 'react'
import Film from './film'

export default (props) => {
  return (
    <ul>
        {props.filmList.map((film) => <Film film={film}/>)}
    </ul>
  )
}
