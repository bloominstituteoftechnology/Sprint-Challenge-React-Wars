import React, { Component } from 'react'

const Films = props => {
    return (   
            <select>
                <option> Films </option>         
            {props.films.map(film => {
                return <option key={film}> {film} </option>
            })}   
            </select>
    )
}

export default Films