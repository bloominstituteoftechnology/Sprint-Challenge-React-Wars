import React from 'react'
import './StarWars.css'
import Cards from './Cards'

const MainComponent = props => {
    return (
        <div>
            {props.propsData.map(item => {
                return (
                    <Cards propsCharacter={item}/>
                )
            })}
        </div>
    )
}

export default MainComponent