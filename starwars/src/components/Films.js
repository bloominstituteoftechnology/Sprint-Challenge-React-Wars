import React from 'react';
import { CardTitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Films = props => {
    return (
    <div className="container">
        <h3 className="subtitle"> Click to Learn More About A Film </h3>
        {props.films.map(film => {
            return (
                <div className="row" key={film.url}>
                    <NavLink to={`/films/${film.title.toLowerCase().split(' ').join('')}`} className="col-12"> <CardTitle className="mt-5 mein-card bold-card">{film.title}</CardTitle></NavLink>
                </div>
        )})}
    </div>
    )
}
export default Films