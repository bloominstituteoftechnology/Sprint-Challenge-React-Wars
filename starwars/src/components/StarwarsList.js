import React from 'react'
import Starwars from './Starwars'

const StarwarsList = props => {
    return (
        <div>
            {props.passedList.map(item => {
                return <Starwars
                key={Math.random()}
                name={item.name}
                gender={item.gender}
                homeworld={item.homeworld.name}
                mass={item.mass}
                birth={item.birth_year}
                eye={item.eye_color}
                />
            })}
            </div>
    )
}
export default StarwarsList