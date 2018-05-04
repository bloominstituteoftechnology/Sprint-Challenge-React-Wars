import React from 'react'

const Films = props => {
    return (
        <div className="container fierce">
            <div className="row">
            <select className="mw-100 mein-issues">
                <option>Films</option>         
            {props.films.map(film => {
                return <option key={film}> {film} </option>
            })}   
            </select>
            </div>
            </div>
    )
}

export default Films