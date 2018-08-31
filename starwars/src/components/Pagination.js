import React from 'react'
import './Card.css'

const Pagination = (props) => {
  return (
    <div className="Pagination">
      <button onClick={(e) => props.getCharacters(props.previousPage ? props.previousPage : null)}>Previous Page</button>
      <button onClick={(e) => props.getCharacters(props.nextPage)}>Next Page</button>
    </div>
  )
}

export default Pagination