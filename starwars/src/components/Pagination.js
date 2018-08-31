import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
  let countArr = [...Array(props.state.maxPage).keys()]

  return (
    <div className="Pagination">
      <div className="counters">
        {countArr.map(page => {
          return <span className="counter" key={page}>{page + 1}</span>
        })}
      </div>
      <button onClick={(e) => props.getCharacters(props.state.previousPage ? props.state.previousPage : "https://swapi.co/api/people")}>Previous Page</button>
      <button onClick={(e) => props.getCharacters(props.state.nextPage)}>Next Page</button>
    </div>
  )
}

export default Pagination