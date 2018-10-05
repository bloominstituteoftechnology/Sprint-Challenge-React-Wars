import React from 'react'
import './StarWars.css'
import Cards from './Cards'

const MainComponent = props => {
    return (
        <div>
            <h1>Star Wars Character Data</h1>
            {props.propsData.map(item => {
                return (
                    <Cards propsCharacter={item}/>
                )
            })}
        </div>
    )
}

export default MainComponent