// Write your Character component here
import React from 'react'

export default function Character(props) {

    const {name, gender, height, mass, birth_year} = props;

    return (
        <div className = 'card'>
            <h3><span className = 'yellow'>Name:</span> {name}</h3>
            <h4><span className = 'yellow'>Gender:</span> {gender}</h4>
            <h4><span className = 'yellow'>Birth:</span> {birth_year}</h4>
            <h4><span className = 'yellow'>Height / Mass:</span> {height} in /{mass} kg</h4>
            
        </div>
    )
}
