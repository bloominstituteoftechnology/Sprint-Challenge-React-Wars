import React from 'react'

const ContentButtons = (props) => {

return(
  <div className="optionWrapper">
    <select onChange={props.changeContent}>
      <option value="people">People</option>
      <option value="planets">Planets</option>
      <option value="films">Films</option>
      <option value="Species">Species</option>
      <option value="vehicles">Vehicles</option>
      <option value="starships">Starships</option>
    </select>
  </div>
  )
}
export default ContentButtons
