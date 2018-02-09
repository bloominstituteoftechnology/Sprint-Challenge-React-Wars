import React from 'react'

const Page = (props) =>{
  return(
    <li className='page'>
      <div className="page_attrs">Name: {props.page.name}</div>
      <div className="page_attrs">Gender: {props.page.gender}</div>
      <div className="page_attrs">Height: {props.page.height}</div>
      <div className="page_attrs">Hair: {props.page.hair_color}</div>
      <div className="page_attrs">Birth Year: {props.page.birth_year}</div>
      <div className="page_attrs">Skin: {props.page.skin_color}</div>
      <div className="page_attrs">Eye Color: {props.page.eye_color}</div>
      
      
 </li>
    )
}

export default Page;